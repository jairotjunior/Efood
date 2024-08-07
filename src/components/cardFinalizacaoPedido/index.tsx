import { Overlay } from '../cart/styles'

import {
  ConteudoFinalizacaoPedido,
  FormFinalizacaoPedido,
  Botao,
  MensagemFinalizacao
} from './styles'

export const FinalizacaoPedido = () => {
  return (
    <ConteudoFinalizacaoPedido>
      <Overlay />
      <FormFinalizacaoPedido>
        <h3>Pedido realizado - ORDER_ID</h3>
        <MensagemFinalizacao>
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
        </MensagemFinalizacao>
        <Botao>Concluir</Botao>
      </FormFinalizacaoPedido>
    </ConteudoFinalizacaoPedido>
  )
}
