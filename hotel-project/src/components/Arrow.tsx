import React from "react";
import { motion } from "framer-motion";

interface ArrowProps {
    display: boolean;
}

const variants = {
    hidden: {x: 0, opacity: 0},
    display: {x: 20, opacity: 1},
}

const Arrow: React.FC<ArrowProps> = ({display}) => {


  return (
    <motion.svg
        width="40"
        height="20"
        viewBox="30 38 40 24"
        xmlns="http://www.w3.org/2000/svg"
        variants={variants}
        animate={display ? 'display' : 'hidden'}
        transition={{duration: .4}}
    >
        <path d="M30 50 L70 50 M55 40 L70 50 L55 60" stroke="black" strokeWidth="2" fill="none" />
    </motion.svg>
  )
}

export default Arrow