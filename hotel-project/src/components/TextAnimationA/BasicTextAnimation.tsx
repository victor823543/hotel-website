import React from 'react'
import { motion } from 'framer-motion'

interface TextProps {
    children: React.ReactNode,
}

const BasicTextAnimation: React.FC<TextProps> = ({children}) => {
  return (
    <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, ease: 'easeOut'}}
        viewport={{once: true}}
    >
        {children}
    </motion.div>
  )
}

export default BasicTextAnimation