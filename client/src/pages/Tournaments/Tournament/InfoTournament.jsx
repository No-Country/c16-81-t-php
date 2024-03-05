import React, { useState, useEffect } from 'react';
import { coupon, calendar, time} from "../../../assets";
import { useParams, useNavigate } from 'react-router-dom';
import Results from './Results';

const Tournaments = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // Dirigirse a la parte superior de la página al cargar la página del torneo
    window.scrollTo(0, 0);
  }, []);

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

    getTorneoInfo();
  }, [tournamentId]);

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
  

  return (
    <section className="container mx-auto py-12 xl:px-0 sm:px-16 px-2 mb-16">
        <div>
            {!torneoInfo ? (
                <h1 className="text-secondary text-4xl font-monse">⌛ Cargando...</h1>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-y-4">
                    <div className="flex flex-col items-start">
                      <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Fecha y hora de comienzo</h1>
                      <div className="flex flex-row items-center gap-2 mb-2">
                          <img src={calendar} alt="Calendar" width="26" height="auto"/>
                          <span className="font-monse font-semibold text-[20px] sm:text-3xl text-[#BFC0E0]">{formatDate(torneoInfo.tournament.starts_the).date}</span>
                      </div>
                      <div className="flex flex-row items-center gap-2 mb-4">
                          <img src={time} alt="Calendar" width="30" height="auto"/>
                          <span className="font-monse font-semibold text-[20px] sm:text-3xl text-[#BFC0E0]">{formatDate(torneoInfo.tournament.starts_the).time}</span>
                      </div>
                    </div>  
                    <div className="flex flex-col items-start sm:items-end">
                      <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Participantes</h1>
                      <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-3xl">{torneoInfo.tournament.quantity_teams}</span>
                    </div>  
                    <div className="flex flex-col items-start">
                      <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Modalidad</h1>
                      <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-3xl">{torneoInfo.tournament.modality}</span>
                    </div>  
                    <div className="flex flex-col items-start sm:items-end">
                      <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Torneo realizado por</h1>
                      <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-3xl">{torneoInfo.tournament.managed_by.nick_name}</span>
                    </div>  
                    {torneoInfo.tournament.link_ingame && (
                      <div className="flex flex-col items-start">
                        <h1 className="font-monse font-bold text-balance ss:text-[30px] text-[22px] text-secondary mb-2">Link del torneo</h1>
                        <span className="font-monse font-semibold text-[#BFC0E0] text-[20px] sm:text-3xl">{torneoInfo.tournament.link_ingame}</span>
                      </div>
                    )}
                    <div className="flex justify-center sm:justify-start ">
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
            ) : (
                <p>Los datos del torneo no están disponibles.</p>
            )}
        </div>
        <div className="results mt-6">
          <h1 className="font-monse font-bold text-balance ss:text-[24px] text-[22px] text-secondary mb-1">¿Cómo va el torneo?</h1>

          <Results />
        </div>
    </section>
  );
};

export default Tournaments;
