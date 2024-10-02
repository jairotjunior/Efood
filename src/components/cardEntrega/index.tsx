import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import {
  avancaEtapa,
  retornaEtapa,
  open,
  zeraEtapa,
  remove,
  close
} from '../../store/reducers/sacola'
import { RootReducer } from '../../store'
import { formataPreco, somaTotal } from '../../util'

import { Overlay } from '../cart/styles'
import * as S from './styles'
import { useState } from 'react'

export const EnderecoEntrega = () => {
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const [erro, setErro] = useState<string | null>(null)

  const { etapa, items } = useSelector((state: RootReducer) => state.garcon)

  const avancaPagamento = () => {
    console.log(form.values.cep.length)
    console.log(form.values.numero.length)
    if (form.values.nome.length <= 3) {
      setErro('Favor preencher o campo Nome')
      return
    }
    if (form.values.endereco.length <= 3) {
      setErro('Favor preencher o campo Endereco')
      return
    }
    if (form.values.cidade.length <= 3) {
      setErro('Favor preencher o campo Cidade')
      return
    }
    if (form.values.cep.length <= 8) {
      setErro('Favor preencher o campo Cep')
      return
    }
    if (form.values.numero.length <= 1) {
      setErro('Favor preencher o campo Número')
      return
    }
    dispatch(avancaEtapa())
    setErro('')
  }

  const finalizaPedido = () => {
    if (!form.touched.nomeCartao) {
      setErro('Informe o nome que consta no cartão')
      return
    }
    if (!form.touched.numCartao) {
      setErro('Número do cartão é obrigatório')
      return
    }
    if (!form.touched.cvv) {
      setErro('Informe os 3 número no verso do cartão')
      return
    }
    if (!form.touched.mesVencimento) {
      setErro('Insira o mês de vencimento')
      return
    }
    if (!form.touched.anoVencimento) {
      setErro('Insira o ano de vencimento')
      return
    }
    dispatch(avancaEtapa())
    setErro(null)
  }

  const retornaCarrinho = () => {
    dispatch(retornaEtapa())
    dispatch(open())
  }

  const retornaFormEntrega = () => {
    dispatch(retornaEtapa())
  }

  const concluir = (ids: number[]) => {
    ids.forEach((id) => dispatch(remove(id)))
    dispatch(zeraEtapa())
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string().min(5, 'Digite o nome completo'),
      endereco: Yup.string().min(5, 'Digite o endereço'),
      cidade: Yup.string().min(5, 'Digite a cidade'),
      cep: Yup.string(),
      numero: Yup.string().min(1, 'Digite o número'),
      complemento: Yup.string().min(0, 'Digite caso tenha complemento'),
      nomeCartao: Yup.string().min(5, 'Digite o nome impresso no cartão'),
      numCartao: Yup.string().min(
        16,
        'Número inserido incorreto, verifique seu cartão'
      ),
      cvv: Yup.string().min(
        3,
        'Digite os número que consta no verso do cartão'
      ),
      mesVencimento: Yup.string().min(
        2,
        'Digite o vencimento impresso no cartão'
      ),
      anoVencimento: Yup.string().min(
        4,
        'Digite o ano de vencimento impresso no cartão'
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const validandoCampos = (fieldName: string, message?: string) => {
    const campoPreenchido = fieldName in form.touched
    const campoErro = fieldName in form.errors

    if (campoPreenchido && campoErro) {
      return ''
    } else {
      return message
    }
  }

  return (
    <>
      {isSuccess && data ? (
        <S.ConteudoFinalizacaoPedido
          className={etapa === 3 ? 'abrir_finalizacaoPedido' : ''}
        >
          <Overlay />
          <S.FormFinalizacaoPedido>
            <h3>Pedido realizado - {data.orderId}</h3>
            <S.MensagemFinalizacao>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br /> <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. <br /> <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br /> <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.MensagemFinalizacao>
            <S.Botao onClick={() => concluir(items.map((item) => item.id))}>
              Concluir
            </S.Botao>
          </S.FormFinalizacaoPedido>
        </S.ConteudoFinalizacaoPedido>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.ConteudoCardEntrega className={etapa === 1 ? 'abrir_entrega' : ''}>
            <Overlay />
            <S.FormEnderecoEntrega>
              <h3>Entrega</h3>
              <S.CamposForm>
                <label htmlFor="nome">Quem irá receber</label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  value={form.values.nome}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.CamposForm>
              <S.CamposForm>
                <label htmlFor="endereco">Endereço</label>
                <input
                  id="endereco"
                  type="text"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.CamposForm>
              <S.CamposForm>
                <label htmlFor="cidade">Cidade</label>
                <input
                  id="cidade"
                  type="text"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.CamposForm>
              <S.CamposCepNum>
                <S.CamposForm>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    id="cep"
                    type="text"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99999-999"
                  />
                </S.CamposForm>
                <S.CamposForm>
                  <label htmlFor="numero">Número</label>
                  <input
                    id="numero"
                    type="number"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.CamposForm>
              </S.CamposCepNum>
              <S.CamposForm>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <input
                  id="complemento"
                  type="text"
                  name="complemento"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.CamposForm>
              <p>{erro ? <S.AvisoErro>{erro}</S.AvisoErro> : null}</p>
              <S.BotoesEntrega>
                <button type="button" onClick={avancaPagamento}>
                  Continuar com o pagamento
                </button>
                <button type="button" onClick={retornaCarrinho}>
                  Voltar para o carrinho
                </button>
              </S.BotoesEntrega>
            </S.FormEnderecoEntrega>
          </S.ConteudoCardEntrega>
          <S.ConteudoPagamento className={etapa === 2 ? 'abrir_pagamento' : ''}>
            <Overlay />
            <S.FormPagamento>
              <h3>
                Pagamento - Valor a pagar{' '}
                <span>{formataPreco(somaTotal(items))}</span>
              </h3>
              <S.CamposFormPagamento>
                <label htmlFor="nomeCartao">Nome no cartão</label>
                <input
                  id="nomeCartao"
                  type="text"
                  name="nomeCartao"
                  value={form.values.nomeCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {validandoCampos('nomeCartao', form.errors.nomeCartao)}
                </small>
              </S.CamposFormPagamento>
              <S.CamposFormCartao>
                <S.CamposFormPagamento>
                  <label htmlFor="numCartao">Número do cartão</label>
                  <InputMask
                    id="numCartao"
                    type="text"
                    name="numCartao"
                    value={form.values.numCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="9999 9999 9999 9999"
                  />
                  <small>
                    {validandoCampos('numCartao', form.errors.numCartao)}
                  </small>
                </S.CamposFormPagamento>
                <S.CamposFormPagamento>
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    id="cvv"
                    type="text"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="999"
                  />
                  <small>{validandoCampos('cvv', form.errors.cvv)}</small>
                </S.CamposFormPagamento>
              </S.CamposFormCartao>
              <S.CamposFormCartao>
                <S.CamposFormPagamento>
                  <label htmlFor="mesVencimento">Mês de vencimento</label>
                  <InputMask
                    id="mesVencimento"
                    type="text"
                    name="mesVencimento"
                    value={form.values.mesVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99"
                  />
                  <small>
                    {validandoCampos(
                      'mesVencimento',
                      form.errors.mesVencimento
                    )}
                  </small>
                </S.CamposFormPagamento>
                <S.CamposFormPagamento>
                  <label htmlFor="anoVencimento">Ano de vencimento</label>
                  <InputMask
                    id="anoVencimento"
                    type="text"
                    name="anoVencimento"
                    value={form.values.anoVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="9999"
                  />
                  <small>
                    {validandoCampos(
                      'anoVencimento',
                      form.errors.anoVencimento
                    )}
                  </small>
                </S.CamposFormPagamento>
              </S.CamposFormCartao>
              <p>{erro ? <S.AvisoErro>{erro}</S.AvisoErro> : null}</p>
              <S.BotoesPagamento>
                <button
                  type={erro === null ? 'submit' : 'button'}
                  onClick={finalizaPedido}
                >
                  Finalizar pagamento
                </button>
                <button type="button" onClick={retornaFormEntrega}>
                  Voltar para a edição de endereço
                </button>
              </S.BotoesPagamento>
            </S.FormPagamento>
          </S.ConteudoPagamento>
        </form>
      )}
    </>
  )
}
