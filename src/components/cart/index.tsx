import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, avancaEtapa } from '../../store/reducers/sacola'
import { formataPreco, somaTotal } from '../../util'

import * as S from './styles'

const Carrinho = () => {
  const { isOpen, items, etapa } = useSelector(
    (state: RootReducer) => state.garcon
  )

  const dispatch = useDispatch()

  const closeSacola = () => {
    dispatch(close())
  }

  const avancaEnderecoEntrega = () => {
    if (items.length > 0) {
      dispatch(close())
      dispatch(avancaEtapa())
      console.log(etapa)
    } else {
      dispatch(close())
      return alert('Favor inserir algo ao carrinho')
    }
  }

  const removerItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CarrinhoConteudo className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeSacola} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
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
              Valor Total <span>{formataPreco(somaTotal(items))}</span>
            </S.ValorTotal>
            <S.Botao onClick={avancaEnderecoEntrega}>
              Continuar com a entrega
            </S.Botao>
          </>
        ) : (
          <p className="carrinho-vazio">Não foi adicionado nenhum prato</p>
        )}
      </S.Sidebar>
    </S.CarrinhoConteudo>
  )
}

export default Carrinho
