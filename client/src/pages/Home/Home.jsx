import styles from '../../style';
import Hero from '../../components/Hero';
import Partners from '../../components/Partners';
import Info from '../../components/Info';
import GamesCarrousel from '../../components/GamesCarrousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  return (
    <div className={`bg-primary ${styles.flexStart} flex-col`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Partners />
        </div>
        <Info />
        <div className={`${styles.boxWidth}`}>
          <GamesCarrousel />
        </div>
    </div>
  )
}

export default Home