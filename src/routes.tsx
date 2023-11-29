import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'

const PersonalizedRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

export default PersonalizedRoute
