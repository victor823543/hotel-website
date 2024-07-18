import styles from './HomePage.module.css'
import LandingSection from './components/LandingSection/LandingSection'
import IntroSection from './components/IntroSection/IntroSection'
import RoomsSection from './components/RoomsSection/RoomsSection'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import FoodSection from './components/FoodSection/FoodSection'
import WellnessSection from './components/WellnessSection/WellnessSection'
import AttractionsSection from './components/AttractionsSection/AttractionsSection'

const HomePage = () => {
  return (
    <div className={styles.body}>
        <NavBar />
        <LandingSection />
        <IntroSection />
        <RoomsSection />
        <FoodSection />
        <WellnessSection />
        <AttractionsSection />
        <Footer />
    </div>
  )
}

export default HomePage