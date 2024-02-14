import { userPlus, target } from '../assets';

const Info = () => {
  return (
    <section className='bg-[#343549] w-full h-auto sm:h-[246px] py-5 sm:py-0 gap-10 sm:gap-0 flex items-center justify-center'>
        <div className='container flex-1 flex flex-col sm:flex-row gap-y-[30px] sm:gap-y-0 items-center justify-between mx-8'>
            <div className='flex items-center '>
                <h1 className='font-monse font-bold text-[32px] text-secondary max-w-[320px] text-center sm:text-start text-pretty'>
                    Juega y organiza competiciones en los juegos más populares
                </h1>
            </div>
            <div className='flex flex-col items-center justify-center gap-6'>
                <div className="w-[300px] flex flex-row justify-start gap-4">
                    <div className='flex justify-center w-[50px] h-[50px] bg-gray-gradient rounded-full'>
                        <img src={userPlus} alt="User" className='object-contain w-[30px]' />
                    </div>
                    <h2 className='font-monse font-medium text-[24px] text-secondary'>Registrate gratis</h2>
                </div>
                <div className='max-w-[300px] flex justify-center items-center text-pretty'>
                    <p className='text-paragraph text-[16px]'>
                        Crea tu cuenta gratis, con tu usuario podrás crear o unirte a un torneo.
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 mb-2.5 sm:mb-0'>
                <div className="w-[300px] flex flex-row justify-start gap-4">
                    <div className='flex justify-center w-[50px] h-[50px] bg-gray-gradient rounded-full'>
                        <img src={target} alt="Target" className='object-contain w-[30px]' />
                    </div>
                    <h2 className='font-monse font-medium text-[24px] text-secondary'>Elige un torneo</h2>
                </div>
                <div className='max-w-[300px] flex justify-center items-center text-pretty'>
                    <p className='text-paragraph text-[16px]'>
                        Elige entre una gran variedad de torneos disponibles o crea y organiza el tuyo. 
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info