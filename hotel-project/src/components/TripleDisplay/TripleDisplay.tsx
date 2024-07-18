import styles from './TripleDisplay.module.css'
import { FC, useState } from 'react'
import { motion } from 'framer-motion';

interface DisplayObject {
    img: string;
    title: string;
    description?: string;
}

interface TripleDisplayProps {
    content: DisplayObject[]
}

const TripleDisplay: FC<TripleDisplayProps> = ({content}) => {
    const [selected, setSelected] = useState<null|number>(null)
  return (
    <div className={styles.mainContainer} onMouseLeave={() => setSelected(null)}>
        {content.map((displayObject, index) => (
            <div className={`${styles.displayObject} ${styles[`object${index}`]}`}
                onMouseEnter={() => setSelected(index)}
            >
                <img className={styles.img} src={displayObject.img} alt="image" style={selected === index ? {transform: 'scale(1.2)'} : undefined}/>

                <motion.h1
                    layout
                    transition={{duration: .3}}
                    className={styles.h1}
                >{displayObject.title}</motion.h1>
                {selected === index &&
                    <motion.p className={styles.p}
                    >{displayObject.description}</motion.p>
                }    
                
                <div className={styles.filter}></div>
            </div>
        ))}
        {!(selected === null) ? 
            <img className={styles.coverImage} src={content[selected].img} alt="image" />
            :
            <img className={styles.coverImage} src={content[0].img} alt="image" />
        }
        <div className={styles.filter}></div>
    </div>
  )
}

export default TripleDisplay