import { FC, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Menu.module.css'
import roomImg from '../../assets/images/svit-2.avif'
import spaImg from '../../assets/images/pool.avif'
import foodImg from '../../assets/images/restaurant-1.avif'

interface MenuProps {
    isOpen: boolean;
}

const menuItems = [
    {title: 'RUM', img: roomImg, route: '/rooms'},
    {title: 'SPA & GYM', img: spaImg, route: '/wellness'},
    {title: 'MAT & DRYCK', img: foodImg, route: '/food'},
]

const Menu: FC<MenuProps> = ({isOpen}) => {
    const [current, setCurrent] = useState(0)
    const navigate = useNavigate()

  return (
    <AnimatePresence>
        {isOpen &&
            <motion.div className={styles.menu}
                initial={{y: '-101%'}}
                animate={{y: 0}}
                exit={{y: '-101%'}}
                transition={{bounce: 0}}
            >
                <div className={styles.leftContainer}>
                    {menuItems.map((menuObject, index) => (
                        <h1 className={styles.h1} key={index} onClick={() => navigate(menuObject.route)} onMouseEnter={() => setCurrent(index)}
                            style={current === index ? {opacity: 1} : {opacity: .5}}
                        >{menuObject.title}</h1>
                    ))}
                </div>
                <div className={styles.rightContainer}>
                    <div>
                        <AnimatePresence>
                            <motion.img src={menuItems[current].img} alt="image" key={current}
                                initial={{opacity: 0, scale: .8}}
                                animate={{opacity: 1, scale: 1, transition: {delay: .3}}}
                                exit={{opacity: 0, scale: .8}}
                            />
                        </AnimatePresence>    
                    </div>
                    
                </div>
            </motion.div>
        }
    </AnimatePresence>
  )
}

export default Menu