import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import RoomPage from './pages/RoomsPage/RoomPage'
import WellnessPage from './pages/WellnessPage/WellnessPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/rooms' element={<RoomPage />} />
        <Route path='/wellness' element={<WellnessPage />} />
      </Routes>
    </>
  )
}

export default App
