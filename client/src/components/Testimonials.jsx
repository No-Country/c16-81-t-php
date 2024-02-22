import React from 'react'
import styles from '../style';
import { quotes, review, arrowLeft, arrowRight } from '../assets';

const Testimonials = () => {
  return (
    <section className="py-8 mb-8 sm:my-8">
        <h1 className='font-monse font-bold text-center ss:text-[52px] text-[30px] text-secondary mb-2'>Lo que dicen nuestros usuarios</h1>
        <p className={`${styles.paragraph} mb-5 text-pretty text-center`}>Cosas que lo convierten en el mejor lugar para competir</p>

        <div className="flex flex-col md:flex-row gap-2 px-2.5 items-center justify-center">
            <div className="bg-card max-w-[570px] h-[270px] rounded-2xl shadow-xl flex flex-wrap content-center">
            <div className="flex flex-grow gap-x-5 xs:gap-x-12 justify-center items-center">
                <img src={quotes} alt="Quotes" className="w-[60px] xs:w-[102px]" />
                <div className="fles flex-col gap-2 justify-center items-center">
                <img src={review} alt="Review" />
                <span className="font-monse font-medium text-secondary text-[20px]">
                    Mathias Gomez
                </span>
                </div>
            </div>
            <p className="font-monse text-[#CBCBDB] text-[18px] text-center text-pretty py-5 px-2.5">
            ArenaMobile ha sido un verdadero hallazgo para mí. La plataforma es intuitiva y me ha permitido sumergirme en la emoción de los torneos de videojuegos móviles. 
            </p>
            </div>

            <div className="bg-card max-w-[570px] h-[270px] rounded-2xl shadow-xl flex flex-wrap content-center">
            <div className="flex flex-grow gap-x-5 xs:gap-x-12 justify-center items-center">
                <img src={quotes} alt="Quotes" className="w-[60px] xs:w-[102px]" />
                <div className="fles flex-col gap-2 justify-center items-center">
                <img src={review} alt="Review" />
                <span className="font-monse font-medium text-secondary text-[20px]">
                    Carlos Morales
                </span>
                </div>
            </div>
            <p className="font-monse text-[#CBCBDB] text-[18px] text-center text-pretty py-5 px-2.5">
            Desde que descubrí ArenaMobile, mi pasión por los videojuegos móviles ha alcanzado nuevas alturas. La organización de torneos es impecable.
            </p>
            </div>

            <div className="bg-card max-w-[570px] h-[270px] rounded-2xl shadow-xl flex flex-wrap content-center">
            <div className="flex flex-grow gap-x-5 xs:gap-x-12 justify-center items-center">
                <img src={quotes} alt="Quotes" className="w-[60px] xs:w-[102px]" />
                <div className="fles flex-col gap-2 justify-center items-center">
                <img src={review} alt="Review" />
                <span className="font-monse font-medium text-secondary text-[20px]">
                    Thiago Rodriguez
                </span>
                </div>
            </div>
            <p className="font-monse text-[#CBCBDB] text-[18px] text-center text-pretty py-5 px-2.5">
             Me he encontrado con jugadores increíbles y he disfrutado de cada competencia. La emoción de ganar un torneo es incomparable!!
            </p>
            </div>
        </div>        
    </section>
  )
}

export default Testimonials