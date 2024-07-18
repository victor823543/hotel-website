import styles from './TextImgObjectB.module.css'
import { FC } from 'react'
import BasicTextAnimation from '../TextAnimationA/BasicTextAnimation';

interface TextImgObjectBProps {
    largeText: string;
    smallText: string;
    source: string;
}

const TextImgObjectB: FC<TextImgObjectBProps> = ({largeText, smallText, source}) => {
  return (
    <div className={styles.objectContainer}>
        <img className={styles.img} src={source} alt="image" />
        <div className={styles.card}>
            <BasicTextAnimation>
                <h2 className={styles.h2}>{largeText}</h2>
            </BasicTextAnimation>
            <BasicTextAnimation>
                <p className={styles.p}>{smallText}</p> 
            </BasicTextAnimation>
        </div>
    </div>
  )
}

export default TextImgObjectB