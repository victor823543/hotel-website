import { useState, useRef, useEffect, RefObject } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

const useElementScroll = (): [RefObject<HTMLImageElement>, MotionValue<number>] => {
    const {scrollY} = useScroll()
  const ref = useRef<HTMLImageElement|null>(null)
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);
        setElementBottom(rect.bottom + window.scrollY);
      }
    };

    // Update the positions initially
    updatePosition();

    // Update the positions on scroll and resize
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  const progress = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementBottom],
    [1.2, 1]
  );

  return [ref, progress]
}

export default useElementScroll