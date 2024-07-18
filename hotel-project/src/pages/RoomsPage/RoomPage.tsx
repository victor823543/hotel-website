import styles from './RoomPage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import LandingHero from '../../components/LandingHero/LandingHero'
import IntroductionSection from '../../components/IntroductionSection/IntroductionSection'
import RoomsSection from './components/RoomsSection/RoomsSection'
import InvitingMessage from '../../components/InvitingMessage/InvitingMessage'
import Footer from '../../components/Footer/Footer'

import landingImg from '../../assets/images/standard-rum-2.avif'
import rumImg1 from '../../assets/images/junior-svit-2.avif'
import rumImg2 from '../../assets/images/svit-1.avif'
import rumImgStanding from '../../assets/images/alla-rum-3.avif'

const largeTextContent = 'Coolt, färgstarkt och modernt - våra 265 rum och sviter kombinerar modern estetik med väl genomtänkta bekvämligheter, bland annat gratis snabbt wifi, platt-tv, en minibar samt kaffe och te. Sov extra gott genom att välja din personliga kudde från vår kuddmeny, tillgänglig för alla rumskategorier. Vissa av våra rum har även utsikt över floden och hamnen.'
const smallTextContent = 'Bor du mer än en natt hos oss? Delta i vårt Green Housekeeping-initiativ. För varje fullständig rumsstädningstjänst som våra gäster avstår från skänker vi 1 EUR till välgörenhet. Vi ser ändå till att ditt rum hålls fräscht och byter handdukar och tömmer papperskorgar varje dag.'
const images = {
    landscapeA: rumImg1,
    landscapeB: rumImg2,
    standing: rumImgStanding,
}


const RoomPage = () => {
  return (
    <div className={styles.body}>
        <NavBar />
        <LandingHero title='VÅRA RUM' source={landingImg}/>
        <IntroductionSection largeText={largeTextContent} smallText={smallTextContent} images={images}/>
        <RoomsSection />
        <InvitingMessage />
        <Footer />
    </div>
  )
}

export default RoomPage