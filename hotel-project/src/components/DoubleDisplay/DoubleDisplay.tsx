import { FC, useState } from 'react'
import styles from './DoubleDisplay.module.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface Content {
    title: string;
    source: string;
    path: string;
}

interface DoubleDisplayProps {
    content: Content[]
}

const DoubleDisplay: FC<DoubleDisplayProps> = ({content}) => {
    const [selected, setSelected] = useState(0)
    const navigate = useNavigate()

  return (
    <div className={styles.mainContainer} onMouseLeave={() => setSelected(0)}>
        <section onMouseEnter={() => setSelected(1)} onClick={() => navigate(content[0].path)}>
            <img className={styles.img} src={content[0]['source']} alt="image" style={selected === 1 ? {transform: 'scale(1.2)'} : undefined}/>
            <div>
                <motion.h1
                    className={styles.h1}
                    animate={selected === 1 ? {y: -30} : {y: 0}}
                    transition={{duration: .3, ease: 'easeIn'}}
                >{content[0]['title']}</motion.h1>
                <motion.p
                    animate={selected === 1 ? {y: -30, opacity: .8} : {y: 0, opacity: 0}}
                    transition={{duration: .3, ease: 'easeIn', delay: .1}}
                >Mer information</motion.p>
            </div>
            <div className={styles.filter}></div>
        </section>
        <section onMouseEnter={() => setSelected(2)} onClick={() => navigate(content[1].path)}>
            <img className={styles.img} src={content[1]['source']} alt="image" style={selected === 2 ? {transform: 'scale(1.2)'} : undefined}/>
            <div>
                <motion.h1
                    className={styles.h1}
                    animate={selected === 2 ? {y: -30} : {y: 0}}
                    transition={{duration: .3, ease: 'easeIn'}}
                >{content[1]['title']}</motion.h1>
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

export default DoubleDisplay