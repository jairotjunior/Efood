import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Pratos from './pages/pratos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pratos" element={<Pratos />} />
  </Routes>
)

export default Rotas
