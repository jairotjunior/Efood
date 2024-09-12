import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { DadosRestaurante } from '../../api'
import { open } from '../../store/reducers/sacola'

import * as S from './styles'

import logo from '../../assets/logo.png'

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
      <S.HeaderHero>
        <div>
          <Link to="/">Restaurantes</Link>
          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>
          <a role="button" className="carrinho" onClick={openSacola}>
            {items.length} produto(s) no carrinho
          </a>
        </div>
      </S.HeaderHero>
      <S.Container>
        <S.ImgRestaurantes src={utilizandoDadosRestaurante.capa} alt="" />
        <div className="overlay">
          <S.Paragrafo>
            <p className="tipoRestaurante">{utilizandoDadosRestaurante.tipo}</p>
            <p className="nomeRestaurante">
              {utilizandoDadosRestaurante.titulo}
            </p>
          </S.Paragrafo>
        </div>
      </S.Container>
    </>
  )
}
export default HeaderPratos
