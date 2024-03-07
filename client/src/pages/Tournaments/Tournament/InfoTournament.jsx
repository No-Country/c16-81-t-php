import { useState, useEffect, useCallback } from 'react';
import { calendar, time} from "../../../assets";
import { useParams, useNavigate } from 'react-router-dom';
import Results from './Results';
import { getTournamentById } from "../../../helpers/callsToAPI"
import { useForm } from 'react-hook-form';
import styles from '../../../style';
import { cleanFormDataValues } from '../../../helpers/forms';

const Tournaments = () => {
  const { inputElement } = styles

  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(false);
  const [tournamentInfo, setTournamentInfo] = useState(null);
  const { tournamentId } = useParams();

  const fetchTournamentInfo = useCallback(async () => {
    const tournament = await getTournamentById(tournamentId);
    setTournamentInfo(tournament);
  }, [])

  useEffect(() => {
    fetchTournamentInfo()
      .catch(console.error);
       
  }, [fetchTournamentInfo]);
  
  useEffect(() => {
    const currentUserId = Number(localStorage.getItem('currentUserId'))
    const managedById = tournamentInfo?.managed_by.id;
    const areTruthy = !!currentUserId && !!managedById
    if(areTruthy && (currentUserId === managedById)){
      setIsAdmin(true)
    }
 
  }, [tournamentInfo])
  

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

  const { register, reset, handleSubmit, formState: {errors} } = useForm(
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
    
    const cleanedValues = cleanFormDataValues(formDataValues)

    try {
      const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME)
      const URL_ENVIROMENT = import.meta.env.VITE_URL_LOCAL

      const resp = await fetch(`${URL_ENVIROMENT}/api/tournaments/${tournamentId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: "application/json",
          withCredentials: "true",
        }, 
        body: JSON.stringify(cleanedValues)
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
    <section className="container min-h-[58vh] mx-auto py-12 xl:px-0 sm:px-16 px-2 mb-16">
          <div className='min-h-[58vh]'>
            {!tournamentInfo ? (
                <h1 className="text-secondary text-4xl font-monse font-semibold">⌛ Cargando...</h1>
            ) : tournamentInfo ? (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-center h-[150px] sm:h-[300px] w-full object-cover shadow-lg">
                    <img src={tournamentInfo.image} alt="Cover Torneo" className='object-cover h-[150px] sm:h-[300px] w-full rounded-xl'/>
                  </div>
                  <div className="name">
                    <h1 className="font-monse font-bold text-balance ss:text-[52px] text-[30px] text-secondary mb-1">
                      {tournamentInfo.name}
                    </h1>
                  </div>
                  {!isAdmin && 
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-y-4">
                      <div className="flex flex-col items-start">
                        <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Fecha y hora de comienzo</h1>
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <img src={calendar} alt="Calendar" width="26" height="auto"/>
                            <span className="font-monse font-semibold text-[20px] sm:text-[26px] text-[#BFC0E0]">{formatDate(tournamentInfo.starts_the).date}</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 mb-4">
                            <img src={time} alt="Calendar" width="30" height="auto"/>
                            <span className="font-monse font-semibold text-[20px] sm:text-[26px] text-[#BFC0E0]">{formatDate(tournamentInfo.starts_the).time}</span>
                        </div>
                      </div>  
                      <div className="flex flex-col items-start sm:items-end">
                        <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Participantes</h1>
                        <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{tournamentInfo.quantity_teams}</span>
                      </div>  
                      <div className="flex flex-col items-start">
                        <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Modalidad</h1>
                        <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{tournamentInfo.modality}</span>
                      </div>  
                      <div className="flex flex-col items-start sm:items-end">
                        <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Torneo realizado por</h1>
                        <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{tournamentInfo.managed_by.nick_name}</span>
                      </div>  
                      {tournamentInfo.link_ingame && (
                        <div className="flex flex-col items-start">
                          <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Link del torneo</h1>
                          <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{tournamentInfo.link_ingame}</span>
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
                    <form id="updateTournament"  onSubmit={handleSubmit(onSubmit)} >
                      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-y-4">
                        <div className="flex flex-col items-start">
                          <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Fecha y hora de comienzo</h1>
                        
                          <input type="datetime-local"
                          name="starts_the"  
                          value={tournamentInfo.starts_the.replace(/:\d{2}$/, '')}   
                          id="starts_the" className={`${inputElement} w-[240px] sm:w-auto`}
                            {...register("starts_the")
                          }
                          />
                        </div>  
                        <div className="flex flex-col items-start sm:items-end">
                          <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Participantes</h1>
                          <input type="number" placeholder={tournamentInfo.quantity_teams} min={8} max={16} step={8} name="quantity_teams" id="quantity_teams" className={`${inputElement} w-[150px]`}
                            {...register("quantity_teams")
                          }
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Modalidad</h1>
                          <select name="modality" value={tournamentInfo.modality} className={`${inputElement} w-[150px] sm:w-auto`}
                            {...register("modality")}
                          >
                            <option value="1v1">1v1</option>
                            <option value="2v2">2v2</option>
                            <option value="3v3">3v3</option>
                            <option value="4v4">4v4</option>
                            <option value="5v5">5v5</option>
                          </select>
                        </div>
                        <div className="flex flex-col items-start sm:items-end">
                          <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Torneo realizado por</h1>
                          <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-[26px]">{tournamentInfo.managed_by.nick_name}</span>
                        </div>  
                        <div className="flex flex-col basis-2/4">
                          <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Link del torneo (opcional)</h1>
                          <input type="text" placeholder={tournamentInfo.link_ingame} name="link_ingame" id="link_ingame" className={`${inputElement}`} {...register("link_ingame")}/>
                        </div>

                        <div className="flex flex-col items-center sm:items-end justify-end">
                          <div className="flex justify-center sm:items-end">
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
                <h1 className="text-secondary text-4xl font-monse font-semibold">Los datos del torneo no están disponibles.</h1>
            )}
        </div>
        <div className="results mt-16">
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
