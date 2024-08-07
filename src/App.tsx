import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from '../src/components/footer'
import Carrinho from './components/cart'
import Rotas from './routes'
import { store } from './store'
import { EnderecoEntrega } from './components/cardEntrega'
import { Pagamento } from './components/cardPagamento'
import { FinalizacaoPedido } from './components/cardFinalizacaoPedido'

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
        <Pagamento />
        <FinalizacaoPedido />
      </BrowserRouter>
    </Provider>
  )
}

export default App
