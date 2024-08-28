import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, avancaEtapa } from '../../store/reducers/sacola'
import { formataPreco } from '../cards_pratos/index'

import * as S from './styles'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.garcon)

  const dispatch = useDispatch()

  const closeSacola = () => {
    dispatch(close())
  }

  const avancaEnderecoEntrega = () => {
    dispatch(close())
    dispatch(avancaEtapa())
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
    <S.CarrinhoConteudo className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeSacola} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.Li key={item.id}>
              <img src={item.foto} alt="" />
              <S.ConteudoLi>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </S.ConteudoLi>
              <button onClick={() => removerItem(item.id)} type="button" />
            </S.Li>
          ))}
        </ul>
        <S.ValorTotal>
          Valor Total <span>{formataPreco(somaTotal())}</span>
        </S.ValorTotal>
        <S.Botao onClick={avancaEnderecoEntrega}>
          Continuar com a entrega
        </S.Botao>
      </S.Sidebar>
    </S.CarrinhoConteudo>
  )
}

export default Carrinho
