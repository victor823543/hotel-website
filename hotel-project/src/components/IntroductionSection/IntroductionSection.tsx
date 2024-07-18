import { FC, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion';
import styles from './IntroductionSection.module.css'
import TextAnimationB from '../TextAnimationB/TextAnimationB';
import BasicTextAnimation from '../TextAnimationA/BasicTextAnimation';
import DecorationLine from '../DecorationLine/DecorationLine';
import useContainerWidth from '../../hooks/useContainerWidth';
import useMousePosition from '../../hooks/useMousePosition';

interface IntroImages {
    landscapeA: string;
    landscapeB: string;
    standing: string;
}

interface IntroductionSectionProps {
    images: IntroImages;
    largeText: string;
    smallText: string;
}


const IntroductionSection: FC<IntroductionSectionProps> = ({largeText, smallText, images}) => {
    const { elementRef, containerWidth } = useContainerWidth()
    const { normalizedX, normalizedY } = useMousePosition()
    const xImg3 = useSpring(0, { damping: 30, stiffness: 100})
    const yImg3 = useSpring(0, { damping: 30, stiffness: 100})
    const xImg2 = useSpring(0, { damping: 30, stiffness: 100})
    const yImg2 = useSpring(0, { damping: 30, stiffness: 100})
    const xImg1 = useSpring(0, { damping: 30, stiffness: 100})
    const yImg1 = useSpring(0, { damping: 30, stiffness: 100})

    useEffect(() => {
        xImg3.set(normalizedX * -150)
        yImg3.set(normalizedY * -125)
        xImg2.set(normalizedX * -60)
        yImg2.set(normalizedY * -30)
        xImg1.set(normalizedX * -100)
        yImg1.set(normalizedY * -60)

    }, [normalizedX, normalizedY])

  return (
    <div className={styles.mainContainer} ref={elementRef}>
        <div className={styles.largeTextContainer}>
            <div className={styles.largeText}>
                <TextAnimationB text={largeText}/>
            </div>
        </div>
        <div className={styles.smallTextContainer}>
            <BasicTextAnimation>
                <p className={styles.smallText}>{smallText}</p>
            </BasicTextAnimation>
        </div>

        <div className={styles.imageWrapper}>
            <motion.img className={styles.img1} src={images.landscapeA} alt='Hotelroom image' 
                style={{y: yImg1, x: xImg1}}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />   
            
            <motion.img className={styles.img2} src={images.landscapeB} alt='Hotelroom image' 
                style={{y: yImg2, x: xImg2}}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
            <motion.img className={styles.img3} src={images.standing} alt='Hotelroom image' 
                style={{y: yImg3, x: xImg3}}
            />
        </div>
        
        <DecorationLine height={600} variant={2} width={containerWidth} color='var(--secondary-color)'/>
    </div>
  )
}

export default IntroductionSection