import React from 'react'
import { coupon, calendar, time} from "../../assets";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

function formatDate(date) {
    const formattedDate = new Date(date);
  
    const day = String(formattedDate.getDate()).padStart(2, '0');
    const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
    const year = formattedDate.getFullYear();
  
    const hours = String(formattedDate.getHours()).padStart(2, '0');
    const minutes = String(formattedDate.getMinutes()).padStart(2, '0');
  
    return { 
      date: `${day}/${month}/${year}`,
      time: `${hours}:${minutes}`
    };
}

const Tournaments = () => {

    const [torneos, setTorneos] = useState([]);

    useEffect(() => {
    const fetchTorneos = async () => {
        try {
        const resp = await fetch("http://127.0.0.1:8000/api/tournaments");
        const data = await resp.json();

        const transformedData = transformTorneosData(data);
        const formattedTorneos = transformedData.map(torneo => ({
            ...torneo,
            formattedDate: formatDate(torneo.date).date,
            formattedTime: formatDate(torneo.date).time
        }));
        setTorneos(formattedTorneos);
        
        } catch (error) {
        console.error(`Error al obtener los torneos: ${error.message}`);
        }
    };

    fetchTorneos();
    }, []);


    const transformTorneosData = (data) => {
        if (!data || !data.tournaments || !data.tournaments.data) {
          return [];
        }
      
        return data.tournaments.data.map((torneo) => ({
          id: torneo.id,
          cover: torneo.image,
          title: torneo.name,
          price: "Gratis", 
          date: torneo.starts_the,
        }));
    };

  return (
    <section id="torneos">
        <div className='px-4 sm:px-6 md:px-[64px]'>
            <h1 className="font-monse font-bold text-balance ss:text-[52px] text-[30px] text-secondary mb-8 container mx-auto">
                Torneos
            </h1>

            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-24">
                {torneos.map((torneo) => (
                    <div className="bg-card max-w-[295px] max-h-[340px] rounded-xl shadow-lg" key={torneo.id}>
                        <div className="flex-1 flex flex-col flex-shrink-0 flex-nowrap mx-4">
                            <img src={torneo.cover} alt="Cover torneo" className='object-cover max-w-[265px] h-[105px] rounded-md my-4' />
                            <h2 className="font-monse font-extrabold text-[14px] ss:text-[16px] sm:text-[20px] lg:text-[22px] text-secondary">
                                <Link to={`/tournament/${torneo.id}`}>{torneo.title}</Link>
                            </h2>
                            <div className="flex flex-row items-center gap-2 my-2">
                                <img src={coupon} alt="Coupon" width="24" height="auto"/>
                                <span className="font-monse font-semibold text-[14px] xs:text-[16px] text-[#BFC0E0]">{torneo.price}</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 mb-2">
                                <img src={calendar} alt="Calendar" width="24" height="auto"/>
                                <span className="font-monse font-semibold text-[14px] xs:text-[16px] text-[#BFC0E0]">{torneo.formattedDate}</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 mb-4">
                                <img src={time} alt="Calendar" width="24" height="auto"/>
                                <span className="font-monse font-semibold text-[14px] xs:text-[16px] text-[#BFC0E0]">{torneo.formattedTime}</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link to="/tournament/{id}">
                                    <button 
                                        type='button'           
                                        className={`w-[120px] xxs:w-[140px] max-h-[40px] sm:w-[200px] md:w-[220px] py-2 px-6 bg-gray-gradient font-monse font-medium text-[14px] sm:text-[16px]
                                        text-white hover:text-secondary outline-none rounded-[14px] shadow-md mb-4`}
                                    > 
                                        Unirse
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Tournaments