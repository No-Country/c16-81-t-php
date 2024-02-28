import styles from '../../style';
import Hero from '../../components/Hero';
import Partners from '../../components/Partners';
import Info from '../../components/Info';
import GamesCarrousel from '../../components/GamesCarrousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Torneos from '../../components/Torneos';
import Ranking from '../../components/Ranking';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import RefreshOnNavigate from '../../components/RefreshOnNavigate';

const Home = () => {

  return (
    <div className={`bg-primary ${styles.flexStart} flex-col`}>
      <RefreshOnNavigate />
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Partners />
        </div>
        <Info />
        <div className={`${styles.boxWidth}`}>
          <GamesCarrousel />
          <Torneos />
          <Ranking />
          <Testimonials />
          <CTA />
        </div>
    </div>
  )
}

export default Home