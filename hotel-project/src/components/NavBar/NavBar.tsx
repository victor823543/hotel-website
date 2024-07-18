import styles from './NavBar.module.css'
import { useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
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
    <>
    <motion.div className={`${styles.mainContainer} ${visible ? styles.visible : styles.hidden}`}
      style={showMenu ? {borderBottom: 'solid 1px rgba(255 255 255 / .5)', backgroundColor: 'var(--primary-color)'} : undefined}
    >
        <div className={styles.menuContainer} onClick={() => setShowMenu(!showMenu)}>
            <div className={styles.menuIcon}>
                <input className={styles.menuIcon__cheeckbox} type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
                </div>
                <p className={styles.menuText}>MENU</p>
            </div> 
        </div>
        
        <div className={styles.titleContainer} onClick={() => navigate('/')}>
            <h2>RIVERSIDE</h2>
            <p>HOTEL</p>

        </div>
        <div className={styles.bookingContainer}>
            <p>Boka rum</p>
        </div>
    </motion.div>
    <Menu isOpen={showMenu}/>
    </>
    
  )
}

export default NavBar