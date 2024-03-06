import React, { useState, useEffect, useRef } from 'react';
import { coupon, calendar, time} from "../../../assets";
import { useParams, useNavigate } from 'react-router-dom';
import Results from './Results';
import { verifyAuthorization } from "../../../helpers/callsToAPI"
import { useForm } from 'react-hook-form';
import styles from '../../../style';

const Tournaments = () => {
  const { labelElement, inputElement } = styles

  const navigate = useNavigate();
  useEffect(() => {
    // Dirigirse a la parte superior de la página al cargar la página del torneo
    window.scrollTo(0, 0);
  }, []);

  const getCurrentUserId = async () => {
    await verifyAuthorization(); 
    const currentUserId = localStorage.getItem('currentUserId'); // Obtener el currentUserId del localStorage
    return currentUserId;
  };

  const [isAdmin, setIsAdmin] = useState(false);
  const [torneoInfo, setTorneoInfo] = useState(null);
  const { tournamentId } = useParams();

  useEffect(() => {
    const getTorneoInfo = async () => {
      try {
        const token = localStorage.getItem(
          import.meta.env.VITE_USER_TOKEN_NAME
        );
  
        const resp = await fetch(`http://127.0.0.1:8000/api/tournaments/${tournamentId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            withCredentials: "true",
          },
        });
  
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error(data.message);
        }
  
        setTorneoInfo(data); 
      } catch (error) {
        console.error(
          `Error al traer datos del torneo: ${error.message}`
        );
        setTorneoInfo(null);
      }
    };
  
    const checkAdminStatus = async () => {
      await getTorneoInfo(); // Obtener la información del torneo al cargar el componente
      const currentUserId = await getCurrentUserId(); // Obtener el ID del usuario actual
      const managedById = torneoInfo?.tournament?.managed_by.id; // Obtener el ID del administrador del torneo

      if (currentUserId && managedById && currentUserId.toString() === managedById.toString()) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };

    checkAdminStatus(); // Verificar el estado de administrador al cargar el componente
  }, [tournamentId, torneoInfo]);
  

  function formatDate(date) {
    const formattedDate = new Date(date);
  
    let hours = formattedDate.getHours();
    let minutes = formattedDate.getMinutes();
    let amOrPm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12 || 12; // Convertir las horas a formato de 12 horas
  
    const day = String(formattedDate.getDate()).padStart(2, '0');
    const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
    const year = formattedDate.getFullYear();
  
    return { 
      date: `${day}/${month}/${year}`,
      time: `${hours}:${minutes} ${amOrPm}`
    };
  }

  const { register, reset, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        quantity_teams: "",
        starts_the: "",
        link_ingame: "",
        modality: "",
      },
    }
  );

  const onSubmit = async(formDataValues) => {
    try {
      const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME)

      const resp = await fetch("http://127.0.0.1:8000/api/tournaments", {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: "application/json",
          withCredentials: "true",
        }, 
        body: JSON.stringify(formDataValues)
      })

      const data = await resp.json()
      if(!resp.ok){ throw new Error(data.message)}
      
      alert(data.msg)
      
      reset()
      navigate('/dashboard/torneos/mis-torneos')
    } catch (error) {
      console.error(error.message)
      alert(error.message)
    }
  }
  

  return (
    <section className="container mx-auto py-12 xl:px-0 sm:px-16 px-2 mb-16">
        <div>
            {!torneoInfo ? (
                <h1 className="text-secondary text-4xl font-monse font-semibold">⌛ Cargando...</h1>
            ) : torneoInfo.tournament ? (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-center h-[150px] sm:h-[300px] w-full object-cover shadow-lg">
                    <img src={torneoInfo.tournament.image} alt="Cover Torneo" className='object-cover h-[150px] sm:h-[300px] w-full rounded-xl'/>
                  </div>
                  <div className="name">
                    <h1 className="font-monse font-bold text-balance ss:text-[52px] text-[30px] text-secondary mb-1">
                      {torneoInfo.tournament.name}
                    </h1>
                  </div>
                  {!isAdmin && 
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-y-4">
                      <div className="flex flex-col items-start">
                        <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Fecha y hora de comienzo</h1>
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <img src={calendar} alt="Calendar" width="26" height="auto"/>
                            <span className="font-monse font-semibold text-[20px] sm:text-[26px] text-[#BFC0E0]">{formatDate(torneoInfo.tournament.starts_the).date}</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 mb-4">
                            <img src={time} alt="Calendar" width="30" height="auto"/>
                            <span className="font-monse font-semibold text-[20px] sm:text-[26px] text-[#BFC0E0]">{formatDate(torneoInfo.tournament.starts_the).time}</span>
                        </div>
                      </div>  
                      <div className="flex flex-col items-start sm:items-end">
                        <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Participantes</h1>
                        <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{torneoInfo.tournament.quantity_teams}</span>
                      </div>  
                      <div className="flex flex-col items-start">
                        <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Modalidad</h1>
                        <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{torneoInfo.tournament.modality}</span>
                      </div>  
                      <div className="flex flex-col items-start sm:items-end">
                        <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Torneo realizado por</h1>
                        <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{torneoInfo.tournament.managed_by.nick_name}</span>
                      </div>  
                      {torneoInfo.tournament.link_ingame && (
                        <div className="flex flex-col items-start">
                          <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Link del torneo</h1>
                          <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{torneoInfo.tournament.link_ingame}</span>
                        </div>
                      )}
                      <div className="flex justify-center sm:justify-start ">
              
                      <div className="flex justify-center sm:justify-start">
                        <button
                          type='button'
                          disabled={true}
                          className={`w-[200px] max-h-[40px] sm:w-[220px]  py-2 px-6 bg-gray-gradient font-monse font-medium text-[14px] sm:text-[16px]
                          text-white hover:text-secondary outline-none rounded-[14px] shadow-md`}
                        >
                          Solicitar unirse
                        </button>
                      </div>
                      </div> 
                    </div>
                  }{isAdmin && 
                    <form id="createTournament"  onSubmit={handleSubmit(onSubmit)} className={`min-h-[58vh] flex flex-col gap-y-4 sm:gap-y-12 p-2 sm:p-6 border-2 border-white/30 rounded-lg`}>

<div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-y-4">
<div className="flex flex-col items-start">
  <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Fecha y hora de comienzo</h1>
 
            <input type="datetime-local" name="starts_the" id="starts_the" className={`${inputElement} w-[211px] sm:w-auto`}
              {...register("starts_the", {
                required: {
                  value: true,
                  message: "La fecha de comienzo es requerida",
                }
              })
            }
            />
</div>  
<div className="flex flex-col ">
            <label htmlFor="quantity_teams" className={`${labelElement}`}>Cantidad de equipos</label>
            <input type="number" min={8} max={16} step={8} name="quantity_teams" id="quantity_teams" className={`${inputElement} w-[150px]`}
              {...register("quantity_teams")
            }
            />
          </div>
          <div className="flex flex-col basis-1/6">
            <label htmlFor="modality" id="modality" className={`${labelElement}`}>Modalidad</label>
            <select name="modality" className={`${inputElement} w-[211px] sm:w-auto`}
              {...register("modality", {
                  required: {
                    value: true,
                    message: "La modalidad es requerida",
                  } 
                })
              }
            >
              <option value="">Seleccione una modalidad</option>
              <option value="1v1">1v1</option>
              <option value="2v2">2v2</option>
              <option value="3v3">3v3</option>
              <option value="4v4">4v4</option>
              <option value="5v5">5v5</option>
            </select>
          </div>
<div className="flex flex-col items-start sm:items-end">
  <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Torneo realizado por</h1>
  <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{torneoInfo.tournament.managed_by.nick_name}</span>
</div>  
<div className="flex flex-col basis-2/4">
            <label htmlFor="link_ingame" className={`${labelElement}`}>Link en el juego (opcional)</label>
            <input type="text" name="link_ingame" id="link_ingame" className={`${inputElement}`} {...register("link_ingame")}/>
          </div>

<div className="flex justify-center sm:justify-start ">
  <div className="flex justify-center sm:justify-start">
    <button
      type='submit'
      className={`w-[200px] max-h-[40px] sm:w-[220px]  py-2 px-6 bg-gray-gradient font-monse font-medium text-[14px] sm:text-[16px]
      text-white hover:text-secondary outline-none rounded-[14px] shadow-md`}
    >
      Actualizar Torneo
    </button>
  </div>
</div> 
</div>
</form>

                  }
                </div>
            ) : (
                <p>Los datos del torneo no están disponibles.</p>
            )}
        </div>
        <div className="results mt-6">
          <h1 className="font-monse font-bold text-balance ss:text-[24px] text-[22px] text-secondary mb-1">¿Cómo va el torneo?</h1>

          <Results />
          {isAdmin && 
          <div className="flex items-center justify-center mt-6 sm:mt-0">
              <button
              type='submit'
              disabled={true}
              className={`w-[300px] max-h-[60px] sm:w-[450px]  py-2 px-6 bg-gray-gradient font-monse font-medium text-[14px] sm:text-[16px]
              text-white hover:text-secondary outline-none rounded-[14px] shadow-md`}
            >
              Actualizar resultados de las confrontaciones
            </button>
          </div>
          }
        </div>
    </section>
  );
};

export default Tournaments;
