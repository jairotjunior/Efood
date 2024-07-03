import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { DadosRestaurante } from '../../api'
import { open } from '../../store/reducers/garcon'

import { HeaderHero, ImgRestaurantes, Container, Paragrafo } from './styles'

import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderPratos = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.garcon)

  const openSacola = () => {
    dispatch(open())
  }

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
          <a onClick={openSacola}>{items.length} produto(s) no carrinho</a>
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
