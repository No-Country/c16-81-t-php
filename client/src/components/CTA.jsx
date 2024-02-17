import React from 'react';
import { icon } from '../assets';

const CTA = () => {
  return (
    <section className="py-8 mb-16">
        <hr className='container mx-auto border-t-1.2 border-card mb-8' />
        <div className="container mx-auto bg-[#27283A] relative max-w-[1170px] min-h-[240px] rounded-[24px] flex flex-row justify-center items-center shadow-2xl" >
            <div className="w-4/5 h-full rounded-s-[24px] absolute left-0 bg-[#343549] clip" />
            <div className="flex flex-wrap gap-2 sm:flex-nowrap mx-auto items-center justify-center py-2.5 sm:px-24 z-[1]">
                <div className="flex flex-col flex-wrap">
                    <h1 className='font-monse font-medium text-texto text-center sm:text-start text-[30px] sm:text-[34px] sm:mb-5'>Suscribete al newsletter</h1>
                    <p className="font-monse font-normal text-[14px] sm:text-[16px] text-[#5C5D75] text-pretty text-center sm:text-start px-[50px] sm:px-0 leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                </div>
                <div className="flex items-center justify-start shadow-xl">
                    <input type="email" className="w-auto h-[50px] sm:h-[64px] bg-[#3E3E54] text-secondary outline-none rounded-[14px] py-1 px-6 " placeholder="Ingresa tu email..."/>
                    <button type='button'           
                            className={`hidden w-[174px] h-[64px] py-1 px-6  bg-gray-gradient flex-1 sm:flex gap-2 flex-row items-center justify-between font-monse font-normal text-[16px] text-white hover:text-secondary outline-none rounded-[14px] ml-[-20px] sm:ml-[-40px]`}> 
                        Suscribir <img src={icon} alt='Icon' />
                    </button>
                    <button type='button'           
                            className={`sm:hidden w-[auto] h-[50px] sm:h-[64px] py-1 px-4 bg-gray-gradient gap-2 flex flex-row items-center justify-between font-monse font-normal text-[12px] text-white hover:text-secondary outline-none rounded-[14px] ml-[-60px]`}> 
                        Suscribir <img src={icon} alt='Icon' className='w-[35px]' />
                    </button>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default CTA