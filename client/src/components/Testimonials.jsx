import React from 'react'
import styles from '../style';
import { quotes, review, arrowLeft, arrowRight } from '../assets';

const Testimonials = () => {
  return (
    <section className="py-8 mb-16">
        <h1 className='font-monse font-bold text-center ss:text-[52px] text-[30px] text-secondary mb-2'>Lo que dicen nuestros usuarios</h1>
        <p className={`${styles.paragraph} mb-5 text-pretty text-center`}>Cosas que lo convierten en el mejor lugar para competir</p>

        <div className="flex flex-col md:flex-row gap-2 px-2.5 items-center justify-center">
            <div className="bg-card max-w-[570px] h-[270px] rounded-2xl shadow-xl flex flex-wrap content-center">
            <div className="flex flex-grow gap-x-12 justify-center items-center">
                <img src={quotes} alt="Quotes" className="w-[102px]" />
                <div className="fles flex-col gap-2 justify-center items-center">
                <img src={review} alt="Review" />
                <span className="font-monse font-medium text-secondary text-[20px]">
                    Robin Ayala Doe
                </span>
                </div>
            </div>
            <p className="font-monse text-[#CBCBDB] text-[18px] text-center text-pretty py-5 px-2.5">
                Pellentesque malesuada auctor nulla, consequat viverra nibh viverra
                eu. Vivamus scelerisque commodo fringilla. Nunc non venenatis lacus.
                Sed feugiat nunc et
            </p>
            </div>

            <div className="bg-card max-w-[570px] h-[270px] rounded-2xl shadow-xl flex flex-wrap content-center">
            <div className="flex flex-grow gap-x-12 justify-center items-center">
                <img src={quotes} alt="Quotes" className="w-[102px]" />
                <div className="fles flex-col gap-2 justify-center items-center">
                <img src={review} alt="Review" />
                <span className="font-monse font-medium text-secondary text-[20px]">
                    John De marli
                </span>
                </div>
            </div>
            <p className="font-monse text-[#CBCBDB] text-[18px] text-center text-pretty py-5 px-2.5">
                Duis at nisi a ex aliquet dapibus quis vitae elit. Ut interdum
                tempus rutrum. Fusce quis vulputate ligula. Duis pulvinar sem quis
                iaculis tristique Pellentesque
            </p>
            </div>

            <div className="bg-card max-w-[570px] h-[270px] rounded-2xl shadow-xl flex flex-wrap content-center">
            <div className="flex flex-grow gap-x-12 justify-center items-center">
                <img src={quotes} alt="Quotes" className="w-[102px]" />
                <div className="fles flex-col gap-2 justify-center items-center">
                <img src={review} alt="Review" />
                <span className="font-monse font-medium text-secondary text-[20px]">
                    Rowhan Smith
                </span>
                </div>
            </div>
            <p className="font-monse text-[#CBCBDB] text-[18px] text-center text-pretty py-5 px-2.5">
                Proin faucibus sapien vel mauris laoreet facilisis sit amet sed
                arcu. Vestibulum dapibus, orci eget consequat sodales, ligula arcu
                ultrices nunc, ut feugiat diam massa eget sem.
            </p>
            </div>
        </div>

        {/* <div className="flex mt-4 justify-center gap-2">
            <button className=" bg-gray-gradient w-[40px] h-[40px] rounded-full z-[2] flex items-center justify-center">
                <img src={arrowLeft} alt="Previous" className='w-[30px]' />
            </button>
            <button className="bg-gray-gradient w-[40px] h-[40px] rounded-full z-[2] flex items-center justify-center">
                <img src={arrowRight} alt="Next"  className='w-[30px]' />
            </button>
        </div> */}
        
    </section>
  )
}

export default Testimonials