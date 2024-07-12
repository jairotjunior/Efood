import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/sacola'
import { formataPreco } from '../cards_pratos/index'

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
  const { isOpen, items } = useSelector((state: RootReducer) => state.garcon)

  const dispatch = useDispatch()

  const closeSacola = () => {
    dispatch(close())
  }

  const somaTotal = () => {
    return items.reduce((valores, ultimoValor) => {
      return (valores += ultimoValor.preco)
    }, 0)
  }

  const removerItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CarrinhoConteudo className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeSacola} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Li key={item.id}>
              <img src={item.foto} alt="" />
              <ConteudoLi>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </ConteudoLi>
              <button onClick={() => removerItem(item.id)} type="button" />
            </Li>
          ))}
        </ul>
        <ValorTotal>
          Valor Total <span>{formataPreco(somaTotal())}</span>
        </ValorTotal>
        <Botao>Continuar com a entrega</Botao>
      </Sidebar>
    </CarrinhoConteudo>
  )
}

export default Carrinho
