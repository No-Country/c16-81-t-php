import styles from '../../style';
import Hero from '../../components/Hero';
import Partners from '../../components/Partners';
import Info from '../../components/Info';

const Home = () => {
  return (
    <div className={`bg-primary ${styles.flexStart} flex-col`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Partners />
        </div>
        <Info />
    </div>
  )
}

export default Home