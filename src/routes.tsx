import { Route, Routes } from 'react-router-dom'

import Home from './pages/pagesHome'
import Pratos from './pages/pagesPratos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pratos/:id" element={<Pratos />} />
  </Routes>
)

export default Rotas
