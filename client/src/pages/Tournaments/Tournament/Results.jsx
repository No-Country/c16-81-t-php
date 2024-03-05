import React from 'react'

const Results = () => {
  return (
    <section className='container mx-auto py-16 flex flex-row gap-x-12 relative overflow-x-auto'>
        <div className="round-one flex flex-col gap-6">
            <h1 className='font-monse font-semibold text-2xl texte center text-paragraph'>Ronda 1</h1>
            <div className="font-monse font-semibold text-paragraph flex flex-col gap-2">
                <div className="visitante px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md ">
                    <span className='playerName'>Equipo A</span>
                    <span className='score'> -- </span>
                </div>
                <div className="local px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md">
                    <span className='playerName'>Equipo B</span>
                    <span className='score'> -- </span>
                </div>
            </div>

            <div className="font-monse font-semibold text-paragraph flex flex-col gap-2">
                <div className="visitante px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md ">
                    <span className='playerName'>Equipo C</span>
                    <span className='score'> -- </span>
                </div>
                <div className="local px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md">
                    <span className='playerName'>Equipo D</span>
                    <span className='score'> -- </span>
                </div>
            </div>

            <div className="font-monse font-semibold text-paragraph flex flex-col gap-2">
                <div className="visitante px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md ">
                    <span className='playerName'>Equipo E</span>
                    <span className='score'> -- </span>
                </div>
                <div className="local px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md">
                    <span className='playerName'>Equipo F</span>
                    <span className='score'> -- </span>
                </div>
            </div>

            <div className="font-monse font-semibold text-paragraph flex flex-col gap-2">
                <div className="visitante px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md ">
                    <span className='playerName'>Equipo G</span>
                    <span className='score'> -- </span>
                </div>
                <div className="local px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md">
                    <span className='playerName'>Equipo H</span>
                    <span className='score'> -- </span>
                </div>
            </div>            
        </div>

        <div className="round-two flex flex-col gap-[50px] pt-[70px]">
             <h1 className='font-monse font-semibold text-2xl text-paragraph'>Ronda 2</h1>
            <div className="font-monse font-semibold text-paragraph flex flex-col gap-2">
                <div className="visitante px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md ">
                    <span className='playerName text-texto'>Por definir</span>
                    <span className='score'> -- </span>
                </div>
                <div className="local px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md">
                    <span className='playerName text-texto'>Por definir</span>
                    <span className='score'> -- </span>
                </div>
            </div>

            <div className="font-monse font-semibold text-paragraph flex flex-col gap-2">
                <div className="visitante px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md ">
                    <span className='playerName text-texto'>Por definir</span>
                    <span className='score'> -- </span>
                </div>
                <div className="local px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md">
                    <span className='playerName text-texto'>Por definir</span>
                    <span className='score'> -- </span>
                </div>
            </div>          
        </div>

        <div className="round-three flex flex-col gap-[40px] pt-[160px]">
            <h1 className='font-monse font-semibold text-2xl text-paragraph'>Ronda final</h1>
            <div className="font-monse font-semibold text-paragraph flex flex-col gap-2">
                <div className="visitante px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md ">
                    <span className='playerName text-texto'>Por definir</span>
                    <span className='score'> -- </span>
                </div>
                <div className="local px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md">
                    <span className='playerName text-texto'>Por definir</span>
                    <span className='score'> -- </span>
                </div>
            </div>
        </div>

        
        <div className="winner flex flex-col gap-[40px] pt-[180px]">
            <h1 className='font-monse font-semibold text-2xl text-paragraph'>Ganador</h1>
            <div className="font-monse font-semibold text-paragraph flex flex-col gap-2">
                <div className="local px-4 py-4 bg-card flex flex-row w-[200px] h-10 items-center justify-between rounded-lg shadow-md">
                    <span className='playerName text-texto'>Por definir</span>
                    <span className='score'> -- </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Results