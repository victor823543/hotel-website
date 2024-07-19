import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import RoomPage from './pages/RoomsPage/RoomPage'
import WellnessPage from './pages/WellnessPage/WellnessPage'
import FoodPage from './pages/FoodPage/FoodPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/rooms' element={<RoomPage />} />
        <Route path='/wellness' element={<WellnessPage />} />
        <Route path='/food' element={<FoodPage />} />
      </Routes>
    </>
  )
}

export default App
