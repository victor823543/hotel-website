import styles from './FoodSection.module.css'
import { useState } from 'react'

import Arrow from '../../../../components/Arrow'
import BasicAnimateImg from '../../../../components/BasicAnimateImg/BasicAnimateImg'
import useElementScroll from '../../../../hooks/useElementScroll'
import useContainerWidth from '../../../../hooks/useContainerWidth'
import DecorationLine from '../../../../components/DecorationLine/DecorationLine'

import breakfast1 from '../../../../assets/images/frukost-1.webp'
import breakfast2 from '../../../../assets/images/frukost-2.avif'
import poolbar1 from '../../../../assets/images/pool-bar-1.webp'
import poolbar2 from '../../../../assets/images/pool-bar-2.webp'
import cocktail1 from '../../../../assets/images/cocktailbar-1.webp'
import cocktail2 from '../../../../assets/images/cocktailbar-2.webp'
import restaurant1 from '../../../../assets/images/restaurant-1.avif'
import restaurant2 from '../../../../assets/images/restaurant-2.avif'

const linkObjects = [
  {title: 'FRUKOST', source1: breakfast1, source2: breakfast2},
  {title: 'POOL BAR', source1: poolbar1, source2: poolbar2},
  {title: 'COCKTAIL BAR', source1: cocktail1, source2: cocktail2},
  {title: 'RESTAURANG', source1: restaurant1, source2: restaurant2},
]

const FoodSection = () => {
  const [img1Ref, progressImg1] = useElementScroll()
  const [img2Ref, progressImg2] = useElementScroll()
  const [selected, setSelected] = useState(0)
  const { elementRef, containerWidth } = useContainerWidth()
  

  return (
    <div ref={elementRef} className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.h1}>MAT MED KÄRLEK</h1>
        </div>
        <div className={styles.info}>
          <p>Vår restaurang och bar har inspirerats av det dynamiska och mångsidiga området. Här frodas gränslös kreativitet och fantasi, och klassiker möter innovativa varianter - med en aning galenskap.</p>
        </div>
        <div ref={img2Ref} className={styles.imageContainer}>
          <BasicAnimateImg source={linkObjects[selected]['source2']} motionValue={progressImg2}/>
        </div>
      </div>
      <div className={styles.links}>
        <div ref={img1Ref} className={styles.imageContainer}>
          <BasicAnimateImg source={linkObjects[selected]['source1']} motionValue={progressImg1}/>
        </div>
        <ul className={styles.linkList}>
          {linkObjects.map((object, index) => (
            <li className={styles.li} key={object.title}>
              <div style={index === selected ? {opacity: 1} : {opacity: .5}} onMouseEnter={() => setSelected(index)}>{object.title}</div>
              <Arrow display={index === selected}/>
            </li>
          ))}
        </ul>
      </div>
      <DecorationLine width={containerWidth} color='var(--primary-color)' variant={5}/>
    </div>
  )
}

export default FoodSection