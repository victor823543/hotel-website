import React from 'react'
import { motion, AnimatePresence, MotionValue } from 'framer-motion';
import styles from './BasicAnimateImg.module.css'

interface ImgProps {
    source: string;
    motionValue: MotionValue<number>;
}

const BasicAnimateImg: React.FC<ImgProps> = ({source, motionValue}) => {
  return (
    <AnimatePresence initial={false}>
        <motion.img 
            className={styles.img}
            src={source}
            key={source}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.6}}
            style={{scale: motionValue, position: 'absolute'}}
        /> 
    </AnimatePresence>
    
  )
}

export default BasicAnimateImg