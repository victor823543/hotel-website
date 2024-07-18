import styles from './IntroSection.module.css'
import TextBackground from '../../../../assets/images/exterior1.avif'
import DecorationLine from '../../../../components/DecorationLine/DecorationLine'
import useContainerWidth from '../../../../hooks/useContainerWidth'
import BasicTextAnimation from '../../../../components/TextAnimationA/BasicTextAnimation'

const IntroSection = () => {
  const { elementRef, containerWidth } = useContainerWidth()

  return (
    <div className={styles.mainContainer} ref={elementRef}>
        <div className={styles.headingContainer}>
            <BasicTextAnimation>
                <h1 style={{backgroundImage: `url(${TextBackground})`}}>NJUT AV BÅDE HAV OCH STAD VID ÄLVEN I GÖTEBORG.</h1>
            </BasicTextAnimation>
        </div>
        <div className={styles.descriptionContainer}> 
            <BasicTextAnimation>
                <p className={styles.p}>Riverside Hotel är perfekt beläget i centrala Göteborg, precis intill hamnen i Lindholmen - det nya innovationsområdet. Det tar endast sex minuter att åka med den avgiftsfria färjan till stadens centrum och du har enkel tillgång till den vackra skärgården. Här kan du koppla av och njuta av vår sköna stämning, fantastiska utsikt och en kostnadsfri wellnessavdelning på takterrassen.</p>
            </BasicTextAnimation>
        </div>
        <DecorationLine width={containerWidth} color='var(--secondary-color)' variant={0}/>
    </div>
  )
}

export default IntroSection