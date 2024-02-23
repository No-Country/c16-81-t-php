import { GooglePlay, appStore, Descargar } from '/src/assets/index.js';
import { gameData } from './gameData';


export const GameCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-4 md:gap-y-8'>
        {gameData.map((game) => (
            <div key={game.title} className="bg-card max-w-[500px] h-auto rounded-2xl flex flex-col items-center justify-center xxs:grid xxs:grid-flow-col gap-3 xxs:gap-0 md:gap-4 p-2 sm:p-4 shadow-md">
            <div className="flex items-center">
                <a href={game.link} ><img src={game.src} alt={game.alt} className='w-[150px] h-auto object-cover rounded-xl' /></a>
            </div>
            <div className="flex flex-col items-start">
                <div className="flex flex-col flex-wrap items-center xxs:items-start  gap-4 xxs:gap-2 md:gap-4 xxs:max-w-[280px] sm:max-w-[300px]">
                <a href={game.link} className='font-monse font-semibold text-secondary text-xl sm:text-[28px] px-2.5 md:px-0'>{game.title}</a>
                <p className='font-monse font-medium text-paragraph text-[12px] sm:text-[14px] text-pretty px-2.5 md:px-0 sm:mb-4'>{game.description}</p>
                </div>
             
                <div className="flex flex-1 gap-3 pt-2 sm:pt-4 justify-start items-center px-2.5 md:px-0">
                    {game.title !== 'Axie Infinity' ? (
                        <div className="flex flex-1 gap-3 pt-2 sm:pt-4 justify-start items-center px-2.5 md:px-0">
                            <div className="btn">
                                <a href={game.google}
                                target="_blank" rel="noopener noreferrer"
                                className='py-2.5 px-6 xxs:w-[115px] sm:w-[130px] bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[16px] text-white hover:text-secondary outline-none rounded-[14px] shadow-2xl'>
                                <img src={GooglePlay} alt="Google Play"/>
                                </a>  
                            </div>

                            <div className="btn">
                                <a href={game.apple}
                                target="_blank" rel="noopener noreferrer"
                                className='py-2.5 px-6 xxs:w-[115px] sm:w-[130px] bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[16px] text-white hover:text-secondary outline-none rounded-[14px] shadow-2xl'>
                                <img src={appStore} alt="App Store"/>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="btn">
                        <a href={game.download}
                        target="_blank" rel="noopener noreferrer"
                        className='py-2.5 px-6 xxs:w-[115px] sm:w-[130px] bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[16px] text-white hover:text-secondary outline-none rounded-[14px] shadow-2xl'><img src={Descargar} alt="Download"/></a>
                        </div>
                    )}
                </div>
            </div>
            </div>
        ))}
    </div>

  )
}

export default GameCard
