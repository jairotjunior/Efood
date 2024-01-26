import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from '../src/components/footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
