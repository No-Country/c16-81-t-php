import React from 'react'
import { coupon, calendar } from "../assets";
import { torneos } from '../data';
import { Link } from "react-router-dom"

const Torneos = () => {
  return (
    <section id="torneos">
        <div className='px-4 sm:px-6 md:px-[64px]'>
            <h1 className="font-monse font-bold text-balance ss:text-[52px] text-[30px] text-secondary mb-8 container mx-auto">
                Torneos
            </h1>

            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {torneos.map((torneo) => (
                    <div className="bg-card max-w-[295px] max-h-[300px] rounded-xl shadow-lg" key={torneo.id}>
                        <div className="flex-1 flex flex-col flex-shrink-0 flex-nowrap mx-4">
                            <img src={torneo.cover} alt="Cover torneo" className='object-cover max-w-[265px] h-[105px] rounded-md my-4' />
                            <h2 className="font-monse font-extrabold text-[14px] ss:text-[16px] sm:text-[20px] lg:text-[22px] text-secondary">{torneo.title}</h2>
                            <div className="flex flex-row items-center gap-2 mb-2">
                                <img src={coupon} alt="Coupon" width="24" height="auto"/>
                                <span className="font-monse font-semibold text-[14px] xs:text-[16px] text-[#BFC0E0]">{torneo.price}</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 mb-4">
                                <img src={calendar} alt="Calendar" width="24" height="auto"/>
                                <span className="font-monse font-semibold text-[14px] xs:text-[16px] text-[#BFC0E0]">{torneo.date}</span>
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
            <div className="relative items-center flex justify-center gap-8 my-4 md:my-8">
            <Link to="/tournaments">
                <button type='button'           
                        className={`py-4 px-6 mt-4 bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[16px]
                        text-white hover:text-secondary outline-none rounded-[14px] shadow-2xl`}> 
                    Descubrir más
                </button>
            </Link>
        </div>
        </div>
    </section>
  )
}

export default Torneos