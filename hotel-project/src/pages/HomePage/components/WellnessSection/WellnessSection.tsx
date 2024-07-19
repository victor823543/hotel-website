import DoubleDisplay from '../../../../components/DoubleDisplay/DoubleDisplay'
import poolImg from '../../../../assets/images/pool.avif'
import gymImg from '../../../../assets/images/gym.avif'

const content = [
    {title: 'RELAX SPA', source: poolImg, path: '/wellness'},
    {title: 'MODERN GYM', source: gymImg, path: '/wellness'},
]

const WellnessSection = () => {
  return (
    <DoubleDisplay content={content}/>
  )
}

export default WellnessSection