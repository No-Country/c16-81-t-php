import React, { useState, useEffect } from 'react';
import { coupon, calendar, time} from "../../../assets";
import { useParams } from 'react-router-dom';

const Tournaments = () => {

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
                <p>Cargando...</p>
            ) : torneoInfo.tournament ? (
                <div>
                <p>Nombre: {torneoInfo.tournament.name}</p>
                <p>Modalidad: {torneoInfo.tournament.modality}</p>
                <p>Cantidad de equipos: {torneoInfo.tournament.quantity_teams}</p>
                <p>Comienza el: {formatDate(torneoInfo.tournament.starts_the).date}</p>
                <p>Hora de inicio: {formatDate(torneoInfo.tournament.starts_the).time}</p>
                {/* Otros campos del torneo */}
                </div>
            ) : (
                <p>Los datos del torneo no están disponibles.</p>
            )}
        </div>
    </section>
  );
};

export default Tournaments;
