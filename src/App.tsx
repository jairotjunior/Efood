import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Footer from '../src/components/footer'
import Carrinho from './components/cart'
import Rotas from './routes'
import { store } from './store'
import { EnderecoEntrega } from './components/cardEntrega'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Rotas />
          <Footer />
        </div>
        <Carrinho />
        <EnderecoEntrega />
      </BrowserRouter>
    </Provider>
  )
}

export default App
