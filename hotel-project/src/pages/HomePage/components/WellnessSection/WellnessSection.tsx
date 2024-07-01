import { useState } from 'react'
import styles from './WellnessSection.module.css'
import { motion } from 'framer-motion'
import poolImg from '../../../../assets/images/pool.avif'
import gymImg from '../../../../assets/images/gym.avif'

const WellnessSection = () => {
    const [selected, setSelected] = useState(0)

  return (
    <div className={styles.mainContainer} onMouseLeave={() => setSelected(0)}>
        <section onMouseEnter={() => setSelected(1)}>
            <img className={styles.img} src={poolImg} alt="pool" style={selected === 1 ? {transform: 'scale(1.2)'} : undefined}/>
            <div>
                <motion.h1
                    className={styles.h1}
                    animate={selected === 1 ? {y: -30} : {y: 0}}
                    transition={{duration: .3, ease: 'easeIn'}}
                >RELAX SPA</motion.h1>
                <motion.p
                    animate={selected === 1 ? {y: -30, opacity: .8} : {y: 0, opacity: 0}}
                    transition={{duration: .3, ease: 'easeIn', delay: .1}}
                >Mer information</motion.p>
            </div>
            <div className={styles.filter}></div>
        </section>
        <section onMouseEnter={() => setSelected(2)}>
            <img className={styles.img} src={gymImg} alt="gym" style={selected === 2 ? {transform: 'scale(1.2)'} : undefined}/>
            <div>
                <motion.h1
                    className={styles.h1}
                    animate={selected === 2 ? {y: -30} : {y: 0}}
                    transition={{duration: .3, ease: 'easeIn'}}
                >MODERN GYM</motion.h1>
                <motion.p
                    animate={selected === 2 ? {y: -30, opacity: .8} : {y: 0, opacity: 0}}
                    transition={{duration: .3, ease: 'easeIn', delay: .1}}
                >Mer information</motion.p>
            </div>
            <div className={styles.filter}></div>
        </section>
    </div>
  )
}

export default WellnessSection