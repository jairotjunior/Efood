import { useDispatch, useSelector } from 'react-redux'

import { zeraEtapa } from '../../store/reducers/sacola'
import { RootReducer } from '../../store'

import { Overlay } from '../cart/styles'

import * as S from './styles'

export const FinalizacaoPedido = () => {
  const dispatch = useDispatch()

  const { etapa } = useSelector((state: RootReducer) => state.garcon)

  const concluir = () => {
    dispatch(zeraEtapa())
  }

  return (
    <S.ConteudoFinalizacaoPedido
      className={etapa === 3 ? 'abrir_finalizacaoPedido' : ''}
    >
      <Overlay />
      <S.FormFinalizacaoPedido>
        <h3>Pedido realizado - ORDER_ID</h3>
        <S.MensagemFinalizacao>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br /> <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. <br /> <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br /> <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </S.MensagemFinalizacao>
        <S.Botao onClick={concluir}>Concluir</S.Botao>
      </S.FormFinalizacaoPedido>
    </S.ConteudoFinalizacaoPedido>
  )
}
