import { Overlay } from '../cart/styles'

import {
  ConteudoPagamento,
  FormPagamento,
  CamposFormPagamento,
  CamposFormCartao,
  Botoes
} from './styles'

export const Pagamento = () => {
  return (
    <ConteudoPagamento>
      <Overlay />
      <FormPagamento>
        <h3>Pagamento - Valor a pagar R$ 190,90</h3>
        <CamposFormPagamento>
          <label htmlFor="nomeCartão">Nome no cartão</label>
          <input id="nomeCartão" type="text" />
        </CamposFormPagamento>
        <CamposFormCartao>
          <CamposFormPagamento>
            <label htmlFor="numCartao">Número do cartão</label>
            <input id="numCartao" type="number" />
          </CamposFormPagamento>
          <CamposFormPagamento>
            <label htmlFor="cvv">CVV</label>
            <input id="cvv" type="number" />
          </CamposFormPagamento>
        </CamposFormCartao>
        <CamposFormCartao>
          <CamposFormPagamento>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <input id="mesVencimento" type="number" />
          </CamposFormPagamento>
          <CamposFormPagamento>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <input id="anoVencimento" type="number" />
          </CamposFormPagamento>
        </CamposFormCartao>
        <Botoes>
          <button>Finalizar pagamento</button>
          <button>Voltar para a edição de endereço</button>
        </Botoes>
      </FormPagamento>
    </ConteudoPagamento>
  )
}
