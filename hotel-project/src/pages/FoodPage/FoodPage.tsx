import styles from './FoodPage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import LandingHero from '../../components/LandingHero/LandingHero'
import IntroductionSection from '../../components/IntroductionSection/IntroductionSection'
import TripleDisplay from '../../components/TripleDisplay/TripleDisplay'
import TextImgObjectB from '../../components/TextImgObjectB/TextImgObjectB'
import ImageSliderA from '../../components/ImageSliderA/ImageSliderA'
import DoubleDisplay from '../../components/DoubleDisplay/DoubleDisplay'
import Footer from '../../components/Footer/Footer'

import restImg1 from '../../assets/images/restaurant-1.avif'
import restImg2 from '../../assets/images/restaurant-2.avif'
import cBarImg2 from '../../assets/images/cocktailbar-2.webp'
import cBarImg1 from '../../assets/images/cocktailbar-1.webp'
import fruImg1 from '../../assets/images/frukost-2.avif'
import fruImg2 from '../../assets/images/frukost-1.webp'
import roofImg1 from '../../assets/images/pool-bar-2.webp'
import poolBar1 from '../../assets/images/pool-bar-1.webp'
import poolImg1 from '../../assets/images/big-pool.jpg'
import roomImg1 from '../../assets/images/superior-rum-1.avif'

const introImages = {
    landscapeA: restImg2,
    landscapeB: cBarImg1,
    standing: cBarImg2,
}

const largeText = 'Kom ihåg att besöka Cuckoos Nest Restaurant & Bar för en unik matupplevelse under din vistelse på Radisson Blu Riverside Hotel, Gothenburg.'
const smallText = 'Njut av en unik måltidsupplevelse på vår restaurang och bar i Göteborg. Vår restaurang och bar har inspirerats av det dynamiska och mångsidiga området. Här frodas gränslös kreativitet och fantasi, och klassiker möter innovativa varianter - med en aning galenskap.'

const tripleDisplayContent = [
    {title: "Cuckoo’s Nest Restaurant", img: restImg2, description: 'Vår Restaurant & Bar erbjuder unika måltidsupplevelser för alla som förväntar sig det extraordinära.'},
    {title: "Cuckoo on the Roof", img: roofImg1, description: 'Koppla av vid baren på vår takterrass med fantastisk utsikt över hamnen.'},
    {title: "Frukost buffé", img: fruImg1, description: 'En mångfalding frukost buffé med allt du kan önska.'},
]

const objSmallText = "Cuckoo’s Nest Restaurant & Bar har ett perfekt läge vid älven på Lindholmen och erbjuder unika måltidsupplevelser för alla som förväntar sig det extraordinära. Sedan öppnandet har Cuckoo's Nest Restaurant & Bar serverat mat och drycker som inspirerats av områdets förflutna, nutid och framtid som en plats för innovation. Boka bord för frukost, lunch eller middag så att du inte missar upplevelsen."
const objLargeText = "Upptäck vår unika restaurang och bar, Rankad som #208 av 1606 restauranger i Göteborg."

const sliderContent = [
    {source: restImg2, title: 'RESTAURANG'}, 
    {source: cBarImg1, title: 'COCKTAIL BAR'},
    {source: poolBar1, title: 'POOLBAR'},
    {source: fruImg2, title: 'FRUKOST'},
    {source: roofImg1, title: 'TERRASS-BAR'}

]

const doubleDisplayContent = [
    {title: 'VÅRA RUM', source: roomImg1, path: '/rooms'},
    {title: 'SPA & GYM', source: poolImg1, path: '/wellness'},
]

const FoodPage = () => {
  return (
    <div className={styles.body}>
        <NavBar />
        <LandingHero title='MAT & DRYCK' source={restImg1}/>
        <IntroductionSection images={introImages} largeText={largeText} smallText={smallText}/>
        <TripleDisplay content={tripleDisplayContent}/>
        <TextImgObjectB smallText={objSmallText} largeText={objLargeText} source={cBarImg1}/>
        <ImageSliderA content={sliderContent}/>
        <DoubleDisplay content={doubleDisplayContent}/>
        <Footer />
    </div>
  )
}

export default FoodPage