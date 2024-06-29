import { Link, useParams } from 'react-router-dom'

import { DadosRestaurante } from '../../api'

import { HeaderHero, ImgRestaurantes, Container, Paragrafo } from './styles'

import logo from '../../assets/logo.png'

const HeaderPratos = () => {
  const parametrosRestaurante = useParams()

  const utilizandoDadosRestaurante = DadosRestaurante(
    Number(parametrosRestaurante.id)
  )

  if (!utilizandoDadosRestaurante) {
    return null
  }

  return (
    <>
      <HeaderHero>
        <div>
          <h5>Restaurantes</h5>
          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>
          <h5>0 produto(s)no carrinho </h5>
        </div>
      </HeaderHero>
      <Container>
        <ImgRestaurantes src={utilizandoDadosRestaurante.capa} alt="" />
        <div className="overlay">
          <Paragrafo>
            <p className="teste">{utilizandoDadosRestaurante.tipo}</p>
            <p className="teste1">{utilizandoDadosRestaurante.titulo}</p>
          </Paragrafo>
        </div>
      </Container>
    </>
  )
}
export default HeaderPratos
