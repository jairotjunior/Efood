import { GlobalCss } from './styles'

import Header from '../src/components/header'
import ListaCardapio from './components/Cardapio'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
        <ListaCardapio />
      </div>
    </>
  )
}

export default App
