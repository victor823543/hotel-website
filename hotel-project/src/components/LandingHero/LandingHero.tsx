import { motion } from 'framer-motion'
import styles from './LandingHero.module.css'
import { FC } from 'react'

interface LandingHeroProps {
    title: string;
    source: string;
}

const LandingHero: FC<LandingHeroProps> = ({title, source}) => {
  return (
    <div 
      className={styles.mainContainer} 
      >
        <motion.div 
          initial={{scale: 1.1}}
          animate={{scale: 1}}
          transition={{duration: .7, ease: 'easeIn'}}
          className={styles.backgroundImage} style={{backgroundImage: `url(${source})` }}></motion.div>
        <motion.h1
          className={styles.h1}
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1.1, delay: .15, ease: 'easeOut'}}
        >{title}</motion.h1>
    </div>
  )
}

export default LandingHero