import { Link, useParams } from 'react-router-dom'

import { DadosRestaurante } from '../../api'

import {
  HeaderHero,
  ImgRestaurantes,
  TipoComida,
  Container,
  TipoRestaurante
} from './styles'

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
        <h5>Restaurantes</h5>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <h5>0 produto(s)no carrinho </h5>
      </HeaderHero>
      <Container>
        <ImgRestaurantes src={utilizandoDadosRestaurante.capa} alt="" />
        <div className="overlay">
          <TipoComida>{utilizandoDadosRestaurante.tipo}</TipoComida>
          <TipoRestaurante>{utilizandoDadosRestaurante.titulo}</TipoRestaurante>
        </div>
      </Container>
    </>
  )
}
export default HeaderPratos
