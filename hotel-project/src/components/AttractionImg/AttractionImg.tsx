import styles from './AttractionImg.module.css'
import React from 'react';
import { motion } from 'framer-motion';
import useElementScroll from '../../hooks/useElementScroll';

interface AttractionImgProps {
    index: number;
    verticalPosition: 'up' | 'down';
    selected: boolean;
    clicked: boolean;
    title: string;
    source: string;
    distance: number;
    measuringRef: React.RefObject<HTMLDivElement>;
}

const AttractionImg: React.FC<AttractionImgProps> = ({index, verticalPosition, selected, clicked, title, source, distance, measuringRef}) => {
    const [imgRef, motionValue] = useElementScroll()
  return (
    <motion.div 
        ref={measuringRef}
        key={index}
        className={styles.container}
        animate={(clicked && verticalPosition === 'up') ? {y: 80} : (clicked && verticalPosition === 'down') ? {y: -80} : {y: 0}}
        transition={{duration: .8, ease: 'easeOut'}}
      
        style={(verticalPosition === 'up') ? {flexDirection: 'column'} : {flexDirection: 'column-reverse'}}
    >
        <div className={styles.imageContainer}>
            <motion.img ref={imgRef} className={styles.img} src={source} alt={title}
                animate={selected ? {opacity: 1} : {opacity: 0.4}}
                transition={{duration: 0.5, ease: 'easeInOut'}}
                style={{scale: motionValue}}
            />
        </div>
        

        <motion.div className={styles.textContainer}
            animate={selected ? {opacity: 1} : {opacity: 0.4}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
        >
            <h2 className={styles.h2}>{title}</h2>
            <p className={styles.p}>{`${distance} km`}</p>
        </motion.div>
        

    </motion.div>
  )
}

export default AttractionImg