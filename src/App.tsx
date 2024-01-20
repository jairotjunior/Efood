import { GlobalCss } from './styles'

import Header from '../src/components/header'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
    </>
  )
}

export default App
