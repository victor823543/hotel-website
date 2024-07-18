import { FC, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './ImgTextObjectA.module.css'

interface RoomInfo {
    title: string;
    quantity: number;
    guests: number;
    area: number; 
    cost: number;
}

interface ImgTextObjectAProps {
    direction: 'left'|'right';
    source: string;
    info: RoomInfo;
    id: number;
    total?: number;
}

const ImgTextObjectA: FC<ImgTextObjectAProps> = ({direction, source, info, id, total=4}) => {
    const imgRef = useRef(null)
    const cardRef = useRef(null)
    const { scrollYProgress: imgScrollY } = useScroll({
            target: imgRef,
            offset: ["start end", "end start"]
        })
        const { scrollYProgress: cardScrollY } = useScroll({
            target: cardRef,
            offset: ["start end", "end start"]
        })
    const imgY = useTransform(imgScrollY, [0, 1], ['0%', '30%'])
    const cardY = useTransform(cardScrollY, [0, 1], ['-5%', '0%'])



  return (
    <div className={`${styles.objectContainer} ${direction === 'left' ? styles.left : styles.right}`}>
        <motion.img ref={imgRef} src={source} alt="hotel image" className={`${styles.img} ${direction === 'left' ? styles.left : styles.right}`} 
            style={{y: imgY}}
        />
        <motion.div className={`${styles.card} ${direction === 'left' ? styles.left : styles.right}`} ref={cardRef}
            style={{y: cardY}}
        >
            <div className={styles.id}>{id} AV {total}</div>
            <h2 className={styles.h2}>{info.title}</h2>
            <div className={styles.pContainer}>
                <p className={styles.p}>Antal rum: {info.quantity}</p>
                <p className={styles.p}>Antal bäddar: {info.guests}</p>
                <p className={styles.p}>Rummets storlek: {info.area}</p>    
            </div>
            <div className={styles.moreInfo}>Mer information</div>
            <div className={styles.costContainer}>
                <div>{info.cost} kr</div>
                <p>PER 1 NATT</p>
            </div>
            <button className={styles.btn}>BOKA DITT BOENDE</button>
        </motion.div>
    </div>
  )
}

export default ImgTextObjectA