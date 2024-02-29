import {linkedin, github, whatsapp, ig, location, foto, noCountry } from '../../assets/index'

const TeamGroup = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10 ">
            <div className="bg-card w-[300px] xxs:w-[400px] sm:w-[460px] h-auto p-2 rounded-2xl">
                <div className="flex flex-row items-center gap-x-2">
                    <div className="rounded-lg w-24 h-28 xxs:w-36 xxs:h-36 object-cover">
                        <img src="https://i.postimg.cc/BQfK2fpL/Gabriela.png" alt='Foto Gaby' className='rounded-lg w-24 h-28 xxs:w-36 xxs:h-36 object-cover'/>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h1 className='font-monse font-semibold text-secondary text-[16px] xxs:text-[24px] sm:text-[30px]'>Gabriela Patiño</h1>
                        <span className='flex flex-row gap-1 items-center font-monse font-medium text-secondary text-[12px] xxs:text-[16px]'><img src={location} className='w-4'/>Caracas, Venezuela.</span>
                    <div className="badges flex gap-1">
                        <span className="bg-blue-100 text-blue-800 text-[9px] xxs:text-[14px] font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            Tester QA
                        </span>

                        <span className="bg-green-100 text-green-800 text-[9px] xxs:text-[14px] font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            Frontend
                        </span>

                        <span className="bg-pink-100 text-pink-800 text-[9px] xxs:text-[14px] font-medium px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                            Desing
                        </span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                            <a href="https://www.linkedin.com/in/gabyp05/" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={linkedin} alt='LinkedIn Gaby' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                            <a href="https://github.com/Gabyp05" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={github} alt='Github Gaby' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                            <a href="https://www.instagram.com/gabyp05/" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={ig} alt='Instagram Gaby' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                    </div>          
                    </div>
                </div>
            </div>

            <div className="bg-card w-[300px] xxs:w-[400px] sm:w-[460px] h-auto p-2 rounded-2xl">
                <div className="flex flex-row items-center gap-x-2">
                    <div className="rounded-lg w-24 h-28 xxs:w-36 xxs:h-36 object-cover">
                        <img src="https://i.postimg.cc/pVhfDZt7/Guido.png" alt='Foto Guido' className='rounded-lg w-24 h-28 xxs:w-36 xxs:h-36 object-cover'/>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h1 className='font-monse font-semibold text-secondary text-[16px] xxs:text-[24px] sm:text-[30px]'>Guido Sinsaya</h1>
                        <span className='flex flex-row gap-1 items-center font-monse font-medium text-secondary text-[12px] xxs:text-[16px]'><img src={location} className='w-4'/>..., Perú.</span>
                    <div className="badges flex gap-1">
                            <span className="bg-pink-100 text-pink-800 text-[10px] xxs:text-[14px] font-medium px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                                Backend
                            </span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                            <a href="https://www.linkedin.com/in//" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={linkedin} alt='LinkedIn Guido' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                            <a href="https://github.com/Guidosh" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={github} alt='Github Guido' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                            <a href="https://www.instagram.com//" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={ig} alt='Instagram Guido' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                    </div>          
                    </div>
                </div>
            </div>

            <div className="bg-card w-[300px] xxs:w-[400px] sm:w-[460px] h-auto p-2 rounded-2xl">
                <div className="flex flex-row items-center gap-x-2">
                    <div className="rounded-lg w-24 h-28 xxs:w-36 xxs:h-36 object-cover">
                        <img src="https://i.postimg.cc/4xT6ZXZJ/Nehuen.png" alt='Foto Nehuen' className='rounded-lg w-24 h-28 xxs:w-36 xxs:h-36 object-cover'/>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h1 className='font-monse font-semibold text-secondary text-[16px] xxs:text-[24px] sm:text-[30px]'>Nehuen Cuenca</h1>
                        <span className='flex flex-row gap-1 items-center font-monse font-medium text-secondary text-[12px] xxs:text-[16px]'><img src={location} className='w-4'/>..., Argentina.</span>
                    <div className="badges flex gap-1">
                            <span className="bg-green-100 text-green-800 text-[9px] xxs:text-[14px] font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                Backend
                            </span>

                            <span className="bg-indigo-100 text-indigo-800 text-[9px] xxs:text-[14px] font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                                Desing
                            </span> 

                            <span className="bg-pink-100 text-pink-800 text-[9px] xxs:text-[14px] font-medium px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                                Frontend
                            </span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                            <a href="https://www.linkedin.com/in//" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={linkedin} alt='LinkedIn Nehuen' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                            <a href="https://github.com/NehuenCuenca" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={github} alt='Github Nehuen' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                            <a href="https://www.instagram.com//" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={ig} alt='Instagram Nehuen' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                    </div>          
                    </div>
                </div>
            </div>

            <div className="bg-card w-[300px] xxs:w-[400px] sm:w-[460px] h-auto p-2 rounded-2xl">
                <div className="flex flex-row items-center gap-x-2">
                    <div className="rounded-lg w-24 h-28 xxs:w-36 xxs:h-36 object-cover">
                        <img src="https://i.postimg.cc/d0NCC7Nw/Yansel.png" alt='Foto Yansel' className='rounded-lg w-24 h-28 xxs:w-36 xxs:h-36 object-cover'/>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h1 className='font-monse font-semibold text-secondary text-[16px] xxs:text-[24px] sm:text-[30px]'>Yansel Hernández</h1>
                        <span className='flex flex-row gap-1 items-center font-monse font-medium text-secondary text-[12px] xxs:text-[16px]'><img src={location} className='w-4'/>..., Cuba.</span>
                    <div className="badges flex gap-1">
                            <span className="bg-green-100 text-green-800 text-[10px] xxs:text-[14px] font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                Backend
                            </span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                            <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={whatsapp} alt='Whatsapp Yansel' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                            <a href="https://github.com/Yansel93" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={github} alt='Github Yansel' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                            <a href="https://www.instagram.com//" target="_blank" rel="noopener noreferrer" className='cursor-pointer scale-on-hover'><img src={ig} alt='Instagram Yansel' className='w-6 h-6 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8' /></a>
                    </div>          
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4">
            <img src={noCountry} alt='Logo No Country' width={250} height={250} className='w-[250px] sm:w-[500px]'/>
        </div>
    </div>
  )
}

export default TeamGroup