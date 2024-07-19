import styles from './WellnessPage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import LandingHero from '../../components/LandingHero/LandingHero'
import IntroductionSection from '../../components/IntroductionSection/IntroductionSection'
import TextImgObjectB from '../../components/TextImgObjectB/TextImgObjectB'
import TripleDisplay from '../../components/TripleDisplay/TripleDisplay'
import ImageSliderA from '../../components/ImageSliderA/ImageSliderA'
import DoubleDisplay from '../../components/DoubleDisplay/DoubleDisplay'
import Footer from '../../components/Footer/Footer'

import landingImg from '../../assets/images/pool-2.avif'
import poolImg1 from '../../assets/images/pool-3.avif'
import poolImg2 from '../../assets/images/pool-5.avif'
import gymImg1 from '../../assets/images/gym.avif'
import saunaImg1 from '../../assets/images/sauna-1.jpg'
import saunaImg2 from '../../assets/images/sauna-2.avif'
import roofImg1 from '../../assets/images/terrass-1.avif'
import poolImg3 from '../../assets/images/pool-6.avif'
import poolImg4 from '../../assets/images/pool-7.avif'
import bigPoolImg from '../../assets/images/big-pool.jpg'
import restImg1 from '../../assets/images/cocktailbar-1.webp'
import roomImg1 from '../../assets/images/superior-rum-1.avif'

const images = {
    landscapeA: gymImg1,
    landscapeB: poolImg1,
    standing: saunaImg1,
}

const largeText = 'Vårt spa är en exklusiv oas för välbefinnande och en exceptionell plats att varva ner på.'
const smallText = 'Upptäck våra spapooler inom- och utomhus där du kan avnjuta en drink i wellnessbaren. Koppla av och sjunk ned i en lugn och trivsam atmosfär. Vi förstår att intima stunder av avkoppling och fysisk förnyelse endast kan uppnås i en avskild miljö, med skräddarsydda upplevelser. För ditt val - unikt utbud av skönhetsbehandlingar inklusive innovativa hälso- och skönhetsprogram.'

const largeText2 = 'Upptäck ljuden och vyerna på Lindholmen. Vår takterrass har en enastående utsikt över stadens hamn.'
const smallText2 = 'Ta hissen upp till vår urbana fristad på elfte våningen. Upplev vyerna och ljuden på Lindholmen i hjärtat av Göteborg. Cuckoo on the Roof erbjuder enastående utsikt över hamnen. Det är en perfekt plats för att njuta av sommaren tillsammans med släkt, vänner eller kollegor.'

const tripleDisplayContent = [
    {img: poolImg2, title: 'JACUZZI', description: 'Njut efter din lyxiga skönhetsvård i vårt uppfriskande wellness-jacuzzibad.'},
    {img: saunaImg2, title: 'BASTU', description: 'Värm dig i bastun och insup den fantastiska utsikten över terassen och staden.'},
    {img: gymImg1, title: 'GYM', description: 'Träna i vårt moderna gym med all tänkbar utrustning.'}
]

const content = [
        {title: 'Terrasspool', source: poolImg3},
        {title: 'Jacuzzi', source: poolImg4},
        {title: 'Bassäng', source: bigPoolImg},
    ]

const doubleDisplayContent = [
  {title: 'MAT & DRYCK', source: restImg1, path: '/food'},
  {title: 'VÅRA RUM', source: roomImg1, path: '/rooms'},
]

const WellnessPage = () => {
  return (
    <div className={styles.body}>
        <NavBar />
        <LandingHero title='SPA & GYM' source={landingImg}/>
        <IntroductionSection images={images} largeText='Varva ner och återhämta dig i vår fitness- och wellnessavdelning på översta våningen - med fantastisk utsikt över Göteborg och älven. Upprätthåll din träningsrutin i vårt gym, och koppla av i bastun eller i någon av våra spapooler.' smallText='Se till att ta dig upp på takterrassen - den är för bra för att missa. På sommaren kan du njuta av en livlig miljö på taket i vår nya bar Cuckoo on the Roof.'/>
        <TextImgObjectB largeText={largeText} smallText={smallText} source={poolImg1}/>
        <TripleDisplay content={tripleDisplayContent}/>
        <TextImgObjectB largeText={largeText2} smallText={smallText2} source={roofImg1}/>
        <ImageSliderA title='POOLUTBUD' content={content}/>
        <DoubleDisplay content={doubleDisplayContent}/>
        <Footer />
    </div>
  )
}

export default WellnessPage