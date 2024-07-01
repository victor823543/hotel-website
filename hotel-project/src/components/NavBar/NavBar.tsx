import styles from './NavBar.module.css'
import { useState, useEffect} from 'react'
import { motion } from 'framer-motion';

const NavBar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          const visible = prevScrollPos > currentScrollPos;
    
          setVisible(visible);
          setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);

  return (
    <motion.div className={`${styles.mainContainer} ${visible ? styles.visible : styles.hidden}`}>
        <div className={styles.menuContainer}>
            <div className={styles.menuIcon}>
                <input className={styles.menuIcon__cheeckbox} type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
                </div>
                <p className={styles.menuText}>MENU</p>
            </div> 
        </div>
        
        <div className={styles.titleContainer}>
            <h2>RIVERSIDE</h2>
            <p>HOTEL</p>

        </div>
        <div className={styles.bookingContainer}>
            <p>Boka rum</p>
        </div>
    </motion.div>
  )
}

export default NavBar