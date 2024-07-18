import styles from './InvitingMessage.module.css'
import { motion, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import BasicTextAnimation from '../TextAnimationA/BasicTextAnimation';

import img1 from '../../assets/images/alla-rum-2.webp'
import img2 from '../../assets/images/alla-rum-1.avif'
import img3 from '../../assets/images/exterior1.avif'
import img4 from '../../assets/images/restaurant-1.avif'

const InvitingMessage = () => {
    const { normalizedX, normalizedY } = useMousePosition()

    const xImg4 = useSpring(0, { damping: 30, stiffness: 100})
    const yImg4 = useSpring(0, { damping: 30, stiffness: 100})
    const xImg3 = useSpring(0, { damping: 30, stiffness: 100})
    const yImg3 = useSpring(0, { damping: 30, stiffness: 100})
    const xImg2 = useSpring(0, { damping: 30, stiffness: 100})
    const yImg2 = useSpring(0, { damping: 30, stiffness: 100})
    const xImg1 = useSpring(0, { damping: 30, stiffness: 100})
    const yImg1 = useSpring(0, { damping: 30, stiffness: 100})

    useEffect(() => {
        xImg4.set(normalizedX * -100)
        yImg4.set(normalizedY * -140)
        xImg3.set(normalizedX * -150)
        yImg3.set(normalizedY * -125)
        xImg2.set(normalizedX * -60)
        yImg2.set(normalizedY * -30)
        xImg1.set(normalizedX * -100)
        yImg1.set(normalizedY * -60)

    }, [normalizedX, normalizedY])

  return (
    <div className={styles.mainContainer}>
        <BasicTextAnimation>
            <h1 className={styles.h1}>SPENDERA DIN SEMESTER HOS OSS</h1>    
        </BasicTextAnimation>
        <BasicTextAnimation>
            <p className={styles.p}>Boka ditt boende</p>    
        </BasicTextAnimation>
        
        <div className={styles.imageWrapper}>
            <motion.img className={styles.img1} src={img1} alt='Hotelroom image' 
                style={{y: yImg1, x: xImg1}}
            />   
            
            <motion.img className={styles.img2} src={img2} alt='Hotelroom image' 
                style={{y: yImg2, x: xImg2}}
            />
            <motion.img className={styles.img3} src={img3} alt='Hotelroom image' 
                style={{y: yImg3, x: xImg3}}
            />
            <motion.img className={styles.img4} src={img4} alt='Hotelroom image' 
                style={{y: yImg4, x: xImg4}}
            />
        </div>
    </div>
  )
}

export default InvitingMessage