import React from "react";
import styles from '../style';
import Slider from "react-slick";
import { codMobile, clashOfClans, FreeFire, clashRoyale, Axie, mobileLegends, pubg, brawlStar  } from "../assets";
import { Link } from "react-router-dom"

function PauseOnHover() {
  var settings = {
    dots: true,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            dots: true
          }
        },
        {
            breakpoint: 430,
            settings: {
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              dots: true
            }
          }
    ],
  };
  return (
    <>
    <section className={`${styles.paddingY} w-full xl:px-0 sm:px-16 lg:pr-0 px-6 `}>
        
        <div className="slider-container ">
        <Slider {...settings}>
            <div>
                <img src={codMobile} alt="img" className="w-[100px] sm:w-[120px] md:w-[200px] object-contain rounded-2xl" />
            </div>
            <div>
                <img src={clashOfClans} alt="img" className="w-[100px] sm:w-[120px] md:w-[200px] object-contain rounded-2xl" />
            </div>
            <div>
                <img src={FreeFire} alt="img" className="w-[100px] sm:w-[120px] md:w-[200px] object-contain rounded-2xl" />
            </div>
            <div>
                <img src={clashRoyale} alt="img" className="w-[100px] sm:w-[120px] md:w-[200px] object-contain rounded-2xl" />
            </div>
            <div>
                <img src={Axie} alt="img" className="w-[100px] sm:w-[120px] md:w-[200px] object-contain rounded-2xl" />
            </div>
            <div>
                <img src={mobileLegends} alt="img" className="w-[100px] sm:w-[120px] md:w-[200px] object-contain rounded-2xl" />
            </div>
            <div>
                <img src={pubg} alt="img" className="w-[100px] sm:w-[120px] md:w-[200px] object-contain rounded-2xl" />
            </div>
            <div>
                <img src={brawlStar} alt="img" className="w-[100px] sm:w-[120px] md:w-[200px] object-contain rounded-2xl" />
            </div>
        </Slider>
        </div>
        <div className="relative items-center flex justify-center gap-8 my-4 md:my-8">
            <Link to="/games">
                <button type='button'           
                        className={`py-4 px-6 mt-4 bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[16px]
                        text-white hover:text-secondary outline-none rounded-[14px] shadow-2xl`}> 
                    Ver Todos 
                </button>
            </Link>
        </div>
    </section>
    </>
  );
}

export default PauseOnHover;
