import styles from './ImageSliderA.module.css'
import { FC, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ArrowWithCircle from '../ArrowWithCircle'

interface Content {
    title?: string;
    source: string;
}

interface ImageSliderAProps {
    title?: string;
    content: Content[];
    includeImgTitle?: boolean;
}

const variants = {
  enter: (direction: 'left' | 'right') => ({x: (direction === 'right') ? '100%' : '-100%', scale: 1}),
  center: { x: 0, scale: 1.2, transition: {
    duration: 1, ease: 'easeIn', scale: {duration: 0.4, ease: 'easeInOut'}
  }},
  exit: (direction: 'left' | 'right') => ({ x: (direction === 'right') ? '-100%' : '100%', scale: 1, transition: {
    duration: 1.1, ease: 'easeIn', scale: {duration: 0.4, ease: 'easeInOut'}
  }})
}

const ImageSliderA: FC<ImageSliderAProps> = ({title=null, content, includeImgTitle=true}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [showCursor, setShowCursor] = useState(false)
  const [canClick, setCanClick] = useState(true)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
      setDirection(clientX < window.innerWidth / 2 ? 'left' : 'right');
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const length = content.length

  const handleSlideClick = () => {
    setCanClick(false)
    if (direction === 'left') {
      let newSlide = currentSlide - 1
      if (newSlide < 0) {
        newSlide = length - 1
      }
      setCurrentSlide(newSlide)
    } else {
      let newSlide = currentSlide + 1
      if (newSlide > length - 1) {
        newSlide = 0
      }
      setCurrentSlide(newSlide)
    }

  }

  const transformSlideValue = (value: number) => {
    if (value < 0) {
      return length - 1
    } else if (value > length - 1) {
      return 0
    } else return value
  }

  return (
    <div className={styles.mainContainer} onClick={canClick ? handleSlideClick : undefined} onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)}>
      <div className={styles.slideContainer}>
        <h1>{title}</h1>
        {includeImgTitle &&
          <div className={styles.titleBlock} onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
          <p>LÄS MER</p>
          <AnimatePresence initial={false}>
            <motion.h2
              key={`${currentSlide}h2`}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{delay: 0.4, duration: 0}}
            >{content[currentSlide]['title']}</motion.h2>
            
          </AnimatePresence>
          <motion.span 
              key={`${currentSlide}span`}
              initial={{x: '-105%'}}
              animate={{x: ['-105%', 0, 0, '105%']}}
              transition={{duration: 0.8, ease: 'easeInOut'}}
            ></motion.span>
        </div>
        }
        
        <div className={`${styles.leftDisplay} ${styles.sideDisplay}`}>
        <AnimatePresence initial={false}>
            <motion.img 
              key={currentSlide}
              src={content[transformSlideValue(currentSlide - 1)]['source']}
              variants={variants}
              custom={direction}
              initial='enter'
              animate='center'
              exit='exit'
            />
          </AnimatePresence>
        </div>
        <div className={styles.mainDisplay}>
          <AnimatePresence initial={false}>
            <motion.img 
              key={currentSlide}
              src={content[currentSlide]['source']}
              variants={variants}
              custom={direction}
              initial='enter'
              animate='center'
              exit='exit'
              onAnimationComplete={() => setCanClick(true)}
            />
          </AnimatePresence>
        </div>
        <div className={`${styles.rightDisplay} ${styles.sideDisplay}`}>
        <AnimatePresence initial={false}>
            <motion.img 
              key={transformSlideValue(currentSlide + 1)}
              src={content[transformSlideValue(currentSlide + 1)]['source']}
              variants={variants}
              custom={direction}
              initial='enter'
              animate='center'
              exit='exit'
            />
          </AnimatePresence>
        </div>
      </div>
      {showCursor &&
        <div className={styles.cursor}>
          <ArrowWithCircle direction={direction} x={cursorPosition.x} y={cursorPosition.y} />
        </div>
      }
      
    </div>
  )
}

export default ImageSliderA