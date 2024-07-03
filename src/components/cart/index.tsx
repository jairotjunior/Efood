import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/garcon'

import {
  Overlay,
  CarrinhoConteudo,
  Sidebar,
  Li,
  ConteudoLi,
  ValorTotal,
  Botao
} from './styles'

const Carrinho = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.garcon)

  const dispatch = useDispatch()

  const closeSacola = () => {
    dispatch(close())
  }

  return (
    <CarrinhoConteudo className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeSacola} />
      <Sidebar>
        <ul>
          <Li>
            <img src="https://via.placeholder.com/80x80" alt="" />
            <ConteudoLi>
              <h3>Prato</h3>
              <p>R$0,00</p>
            </ConteudoLi>
            <button type="button" />
          </Li>
        </ul>
        <ValorTotal>
          Valor Total <span>R$0,00</span>
        </ValorTotal>
        <Botao>Continuar com a entrega</Botao>
      </Sidebar>
    </CarrinhoConteudo>
  )
}

export default Carrinho
