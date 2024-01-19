import { GlobalCss, Container } from './styles'

import Header from '../src/components/header'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
