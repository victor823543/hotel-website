import styles from './AttractionsSections.module.css'
import { useState, useEffect } from 'react'
import AttractionImg from '../../../../components/AttractionImg/AttractionImg'
import DecorationLine from '../../../../components/DecorationLine/DecorationLine'
import ArrowWithCircle from '../../../../components/ArrowWithCircle'
import useContainerWidth from '../../../../hooks/useContainerWidth'
import useViewportWidth from '../../../../hooks/useViewportWidth'
import BasicTextAnimation from '../../../../components/TextAnimationA/BasicTextAnimation'
import { motion } from 'framer-motion'

import liseberg from '../../../../assets/images/liseberg.jpg'
import universeum from '../../../../assets/images/universeum.jpg'
import kopcentrum from '../../../../assets/images/kopcentrum.jpg'
import alvrummet from '../../../../assets/images/alvrummet.jpg'
import parken from '../../../../assets/images/jubileumsparken.jpg'
import kryssning from '../../../../assets/images/kryssning.jpg'

const attractions = [
    {title: 'LISEBERG', source: liseberg, distance: 3.38},
    {title: 'UNIVERSEUM', source: universeum, distance: 3.21},
    {title: 'KÖPCENTRUM', source: kopcentrum, distance: 1.7},
    {title: 'ÄLVRUMMET', source: alvrummet, distance: 0.13},
    {title: 'JUBILEUMSPARKEN', source: parken, distance: 1.43},
    {title: 'KRYSSNING', source: kryssning, distance: 2.17}
]


const AttractionsSection = () => {
    const { elementRef, containerWidth, widthExcludingPadding } = useContainerWidth()
    const viewportWidth = useViewportWidth()
    const [isClicking, setIsClicking] = useState(false)
    const [currentImage, setCurrentImage] = useState(2)
    const [containerX, setContainerX] = useState(0)
    const [allowAnimation, setAllowAnimation] = useState(true)
    const [allowClick, setAllowClick] = useState(true)
    const [switchDirection, setSwitchDirection] = useState<'left' | 'right'>('right');
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false)

    const order = [3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2]

    useEffect(() => {
        setContainerX(((viewportWidth/2) - (containerWidth + (widthExcludingPadding / 2))) - containerWidth)
    }, [viewportWidth, containerWidth, widthExcludingPadding])

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          const { clientX, clientY } = event;
          setCursorPosition({ x: clientX, y: clientY });
          setSwitchDirection(clientX < window.innerWidth / 2 ? 'left' : 'right');
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    const moveContainer = (direction: 'right' | 'left') => {
        if (allowClick) {
            if (direction === 'left') {
                setContainerX(containerX + containerWidth)
                setCurrentImage(currentImage - 1)
            } else {
                setContainerX(containerX - containerWidth)
                setCurrentImage(currentImage + 1)
            }
            setAllowClick(false)
        }
    
        
    }

    const switchPosition = () => {
        setAllowAnimation(true)
        const lengthImages = order.length
        if (currentImage === 1) {
            setAllowAnimation(false)
            setCurrentImage(currentImage + 6)
            setContainerX(containerX - containerWidth * 6)
        } else if (currentImage === lengthImages - 2) {
            setAllowAnimation(false)
            setCurrentImage(currentImage - 6)
            setContainerX(containerX + containerWidth * 6)
        }
        setAllowClick(true)
    }


  return (
    <div className={styles.mainContainer}>
        <div className={styles.upperSection}>
            <div className={styles.headerContainer}>
                <BasicTextAnimation>
                    <h1 className={styles.h1}>SEVÄRDIGHETER</h1>
                </BasicTextAnimation>
            </div>
            <div className={styles.textContainer}>
                <BasicTextAnimation>
                    <p className={styles.p}>Oavsett om du reser i affärer eller nöje kommer du att hitta en hel del att göra i Göteborg. Hotellets läge i hamnen ligger nära Lindholmen Science Park och konferenscenter samt många företag, shoppingdistrikt och museum ägnade åt områdets rika sjöfartshistoria. Gå på en föreställning på Backa Teater och ta sedan en promenad genom 1800-talsträdgårdarna i Trädgårdsföreningen. Fortsätt ditt naturäventyr med ett besök i Slottsskogen. För att uppleva något annorlunda ska du besöka Skandinaviens största nöjespark Liseberg för en dag full av äventyr.</p>
                </BasicTextAnimation>
            </div>
            <DecorationLine width={viewportWidth} variant={3} color='var(--secondary-color)' translateY={-250}/>
        </div>
        <div className={styles.lowerSection} onClick={() => {moveContainer(switchDirection)}} onMouseDown={() => setIsClicking(true)} onMouseUp={() => setIsClicking(false)} onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)}>
            <motion.div className={styles.imgsContainer}
                animate={{x: containerX}}
                transition={allowAnimation ? {duration: 1, ease: 'easeInOut'} : {duration: 0}}
                onAnimationComplete={switchPosition}
            >
                {order.map((position, index) => (
                    <AttractionImg measuringRef={elementRef} index={position} verticalPosition={position % 2 ? 'up' : 'down'} selected={currentImage === index} clicked={isClicking} title={attractions[position]['title']} source={attractions[position]['source']} distance={attractions[position]['distance']}/>
                ))}
            </motion.div>
            {showCursor &&
                <ArrowWithCircle direction={switchDirection} x={cursorPosition.x} y={cursorPosition.y}/>
            }
            
        </div>
    </div>
  )
}

export default AttractionsSection