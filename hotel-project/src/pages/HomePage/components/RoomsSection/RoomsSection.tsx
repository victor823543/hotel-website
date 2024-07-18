import standard from '../../../../assets/images/standard-rum-1.avif'
import superior from '../../../../assets/images/superior-rum-1.avif'
import junior from '../../../../assets/images/junior-svit-1.avif'
import svit from '../../../../assets/images/svit-1.avif'
import ImageSliderA from '../../../../components/ImageSliderA/ImageSliderA'

const rooms = [
  {title: 'Standard rum', source: standard},
  {title: 'Superior rum', source: superior},
  {title: 'Junior svit', source: junior},
  {title: 'Kings Svit', source: svit},
]

const RoomsSection = () => {
  
  return (
    <ImageSliderA title='VÅRA RUM' content={rooms}/>
  )
}

export default RoomsSection