import { useFormik, useFormikContext } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { usePurchaseMutation } from '../../services/api'
import { avancaEtapa, retornaEtapa } from '../../store/reducers/sacola'
import { RootReducer } from '../../store'

import { Overlay } from '../cart/styles'
import * as S from './styles'

export const Pagamento = () => {
  // const formContext = useFormikContext()
  // console.log('formContext', formContext)

  const [purchase] = usePurchaseMutation()

  const { etapa } = useSelector((state: RootReducer) => state.garcon)
  const dispatch = useDispatch()

  const avancaFinalizacaoPedido = () => {
    dispatch(avancaEtapa())
  }

  const retornaFormEntrega = () => {
    dispatch(retornaEtapa())
  }

  const form = useFormik({
    initialValues: {
      nomeCartao: '',
      numCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'Digite o nome impresso no cartão')
        .required('O campo é obrigatório para a realização do pagamento'),
      numCartao: Yup.number()
        .min(16, 'Número inválido para cartão de crédito')
        .max(16, 'Número inválido para cartão de crédito')
        .required('O campo é obrigatório para a realização do pagamento'),
      cvv: Yup.number()
        .min(3, 'Digite os número que consta no verso do cartão')
        .max(3, 'Digite os número que consta no verso do cartão')
        .required('O campo é obrigatório para a realização do pagamento'),
      mesVencimento: Yup.number()
        .min(2, 'Digite o vencimento impresso no cartão')
        .max(2, 'Digite o vencimento impresso no cartão')
        .required('O campo é obrigatório para a realização do pagamento'),
      anoVencimento: Yup.number()
        .min(4, 'Digite o ano de vencimento impresso no cartão')
        .max(4, 'Digite o ano de vencimento impresso no cartão')
        .required('O campo é obrigatório para a realização do pagamento')
    }),
    onSubmit: (values) => {
      purchase({
        // delivery: {
        //   receiver: values.nome,
        //   address: {
        //     description: values.endereco,
        //     city: values.cidade,
        //     zipCode: values.cep,
        //     number: Number(values.numero),
        //     complement: values.complemento
        //   }
        // },
        payment: {
          card: {
            name: values.nomeCartao,
            number: Number(values.numCartao),
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const validandoCampos = (fieldName: string, message?: string) => {
    const campoPreenchido = fieldName in form.touched
    const campoErro = fieldName in form.errors

    if (campoPreenchido && campoErro) return message
    return ''
  }

  return (
    <S.ConteudoPagamento className={etapa === 2 ? 'abrir_pagamento' : ''}>
      <Overlay />
      <S.FormPagamento>
        <h3>Pagamento - Valor a pagar R$ 190,90</h3>
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
          <small>{validandoCampos('nomeCartao', form.errors.nomeCartao)}</small>
        </S.CamposFormPagamento>
        <S.CamposFormCartao>
          <S.CamposFormPagamento>
            <label htmlFor="numCartao">Número do cartão</label>
            <input
              id="numCartao"
              type="number"
              name="numCartao"
              value={form.values.numCartao}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{validandoCampos('numCartao', form.errors.numCartao)}</small>
          </S.CamposFormPagamento>
          <S.CamposFormPagamento>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="number"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{validandoCampos('cvv', form.errors.cvv)}</small>
          </S.CamposFormPagamento>
        </S.CamposFormCartao>
        <S.CamposFormCartao>
          <S.CamposFormPagamento>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <input
              id="mesVencimento"
              type="number"
              name="mesVencimento"
              value={form.values.mesVencimento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {validandoCampos('mesVencimento', form.errors.mesVencimento)}
            </small>
          </S.CamposFormPagamento>
          <S.CamposFormPagamento>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <input
              id="anoVencimento"
              type="number"
              name="anoVencimento"
              value={form.values.anoVencimento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {validandoCampos('anoVencimento', form.errors.anoVencimento)}
            </small>
          </S.CamposFormPagamento>
        </S.CamposFormCartao>
        <S.Botoes>
          <button onClick={avancaFinalizacaoPedido}>Finalizar pagamento</button>
          <button onClick={retornaFormEntrega}>
            Voltar para a edição de endereço
          </button>
        </S.Botoes>
      </S.FormPagamento>
    </S.ConteudoPagamento>
  )
}
