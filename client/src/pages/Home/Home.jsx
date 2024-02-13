import styles from '../../style';
import Hero from '../../components/Hero';
import Partners from '../../components/Partners';

const Home = () => {
  return (
    <div className={`bg-primary ${styles.flexStart} flex-col`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Partners />
        </div>
    </div>
  )
}

export default Home