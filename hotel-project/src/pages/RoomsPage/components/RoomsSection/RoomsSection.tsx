import styles from './RoomsSection.module.css'
import DecorationLine from '../../../../components/DecorationLine/DecorationLine'
import useContainerWidth from '../../../../hooks/useContainerWidth'

import ImgTextObjectA from "../../../../components/ImgTextObjectA/ImgTextObjectA"

import room1Img from '../../../../assets/images/standard-rum-2.avif'
import room2Img from '../../../../assets/images/superior-rum-2.avif'
import room3Img from '../../../../assets/images/junior-svit-2.avif'
import room4Img from '../../../../assets/images/svit-2.avif'

const room1Info = {
    title: 'STANDARD RUM',
    quantity: 54,
    guests: 2,
    area: 24, 
    cost: 1199,
}

const room2Info = {
    title: 'SUPERIOR RUM',
    quantity: 32,
    guests: 2,
    area: 33, 
    cost: 1499,
}

const room3Info = {
    title: 'JUNIOR SVIT',
    quantity: 16,
    guests: 2,
    area: 46, 
    cost: 1999,
}

const room4Info = {
    title: 'SVIT',
    quantity: 5,
    guests: 4,
    area: 57, 
    cost: 2499,
}

const RoomsSection = () => {
    const { elementRef: section1Ref, containerWidth: containerWidth1 } = useContainerWidth()

  return (
    <div className={styles.roomsContainer} ref={section1Ref}>
        <div>
            <ImgTextObjectA source={room1Img} info={room1Info} direction="left" id={1}/>
        </div>
        <div className={styles.lineContainer}>
            <DecorationLine height={600} variant={2} width={containerWidth1} color='var(--secondary-color)'/>
        </div>
        <div>
            <ImgTextObjectA source={room2Img} info={room2Info} direction="right" id={2}/>
        </div>
        <div className={styles.lineContainer}>
            <DecorationLine height={600} variant={4} width={containerWidth1} color='var(--secondary-color)'/>
        </div>
        <div>
            <ImgTextObjectA source={room3Img} info={room3Info} direction="left" id={3}/>
        </div>
        <div className={styles.lineContainer}>
            <DecorationLine height={600} variant={5} width={containerWidth1} color='var(--secondary-color)'/>
        </div>
        <div>
            <ImgTextObjectA source={room4Img} info={room4Info} direction="right" id={4}/>
        </div>
    </div>
    
  )
}

export default RoomsSection