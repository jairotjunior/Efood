import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Pratos from './pages/pratos'
import Popup from './components/pop_prato'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pratos" element={<Pratos />} />
  </Routes>
)

export default Rotas
