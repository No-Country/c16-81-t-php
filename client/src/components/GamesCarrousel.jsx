import React from "react";
import styles from '../style';
import Slider from "react-slick";
import { imgGames  } from "../data";
import { Link } from "react-router-dom"

function PauseOnHover() {

  const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-prev" onClick={onClick}>Previous</button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="slick-next" onClick={onClick}>Next</button>
  );

  var settings = {
    dots: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
    <section className={`${styles.paddingY} container mx-auto px-6 md:px-0`}>
        
        <div className="slider-container ">
        <h1 className="flex-1 font-monse font-bold text-balance ss:text-[52px] text-[30px] text-secondary mb-8">Juegos populares</h1>
        <Slider {...settings}>
          {imgGames.map((imgGames, index) => (
            <div key={index} className="relative">
              <img
                src={imgGames.src}
                alt={imgGames.alt}
                className="w-[108px] sm:w-[140px] md:w-[200px] lg:w-[190px] object-contain rounded-xl"
              />
            </div>
          ))}
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
