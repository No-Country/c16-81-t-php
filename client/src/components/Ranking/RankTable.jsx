import { useEffect, useState } from 'react';
import { primerLugar, segundoLugar, tercerLugar } from "/src/assets/index.js";

const RankTable = () => {

    // const [playerData, setPlayerData] = useState([]);

    // useEffect(() => {
    //     // Lógica para obtener los datos del backend y establecerlos en playerData
    //     fetch('http://127.0.0.1:8000/api/')
    //     .then(response => response.json())
    //     .then(data => setPlayerData(data));
    // }, []);

    const playerData = [
        {
            nombre: "Pepito Perez",
            username: "pepe123",
            puntos: "1000"
        },
        {
            nombre: "usuario dos",
            username: "user22",
            puntos: "800"
        },
        {
            nombre: "usuario tres",
            username: "user33",
            puntos: "500"
        },
        {
            nombre: "usuario cuatro",
            username: "user44",
            puntos: "200"
        },
        {
            nombre: "usuario 5",
            username: "user55",
            puntos: "100"
        },
    ]
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-center">
        <thead className="font-monse text-lg md:text-2xl text-secondary uppercase bg-card border-b border-paragraph">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Rank
                </th>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Puntos
                </th>
            </tr>
        </thead>
        <tbody>
          {playerData.map((player, index) => (
            <tr
              key={index}
              className={`bg-card border-b border-paragraph hover:backdrop-blur-sm hover:bg-white/30 font-monse text-paragraph text-[16px] md:text-xl ${
                index === playerData.length - 1 ? 'border-b-0' : ''}`}>
                <th scope="row" className="px-6 py-4 font-medium">
                    <div className="flex flex-row justify-center">
                        {index < 3 && (
                        <img
                            src={index === 0 ? primerLugar : index === 1 ? segundoLugar : tercerLugar}
                            className="w-[32px] h-auto"
                            alt={`Lugar ${index + 1}`}
                        />
                        )}
                        {index >= 3 && <h1 className="font-monse text-secondary text-3xl">{`${index + 1}°`}</h1>}
                    </div>
                </th>
                <td className="px-6 py-4">{player.nombre}</td>
                <td className="px-6 py-4">{player.username}</td>
                <td className="px-6 py-4">{player.puntos}</td>
            </tr>
          ))}
        </tbody>
    </table>
</div>

  )
}

export default RankTable