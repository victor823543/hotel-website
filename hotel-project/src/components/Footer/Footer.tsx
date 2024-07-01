import styles from './Footer.module.css'

const links = {
    'Våra rum': [
        {label: 'Standardrum', path: ''},
        {label: 'Superior-rum', path: ''},
        {label: 'Junior-svit', path: ''},
        {label: 'Svit', path: ''},
    ],
    'Restaurang & bar': [
        {label: 'Frukost', path: ''},
        {label: 'Nest Restaurang & Bar', path: ''},
        {label: 'Bar on the Roof', path: ''},
    ],
    'Wellness & Fritid': [
        {label: 'Spapooler', path: ''},
        {label: 'Bastu', path: ''},
        {label: 'Takterass', path: ''},
        {label: 'Gym', path: ''}
    ],
    'Boka upplevelse': [
        {label: 'Romantisk upplevelse', path: ''},
        {label: 'Gourmetupplevelse', path: ''},
        {label: 'Avkopplande upplevelse', path: ''},
    ],
}

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.linksContainer}>
            {Object.entries(links).map(([title, object]) => (
                <div key={title} className={styles.linkSet}>
                    <h2>{title}</h2>
                    <ul>
                        {object.map((link, index) => (
                            <li key={index}>{link['label']}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className={styles.infoContainer}>

        </div>
    </div>
  )
}

export default Footer