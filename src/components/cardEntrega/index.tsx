import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Overlay } from '../cart/styles'
import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'

export const EnderecoEntrega = () => {
  const [purchase, { isError, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'Digite o nome completo')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .min(5, 'Digite o endereço')
        .required('O campo é obrigatório'),
      cidade: Yup.string()
        .min(5, 'Digite a cidade')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'CEP inválido, faltando números')
        .max(8, 'CEP inválido, números maiores que o padrão do país')
        .required('O campo é obrigatório'),
      numero: Yup.number()
        .min(5, 'Digite o número')
        .required('O campo é obrigatório'),
      complemento: Yup.string().min(5, 'Digite caso tenha complemento')
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
    const campopreenchido = fieldName in form.touched
    const campoErro = fieldName in form.errors

    if (campopreenchido && campoErro) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.ConteudoCardEntrega>
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
            <small>{validandoCampos('nome', form.errors.nome)}</small>
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
            <small>{validandoCampos('endereco', form.errors.endereco)}</small>
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
            <small>{validandoCampos('cidade', form.errors.cidade)}</small>
          </S.CamposForm>
          <S.CamposCepNum>
            <S.CamposForm>
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="number"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{validandoCampos('cep', form.errors.cep)}</small>
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
              <small>{validandoCampos('numero', form.errors.numero)}</small>
            </S.CamposForm>
          </S.CamposCepNum>
          <S.CamposForm>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <input
              id="complemento"
              type="number"
              name="complemento"
              value={form.values.complemento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {validandoCampos('complemento', form.errors.complemento)}
            </small>
          </S.CamposForm>
          <S.Botoes>
            <button>Continuar com o pagamento</button>
            <button>Voltar para o carrinho</button>
          </S.Botoes>
        </S.FormEnderecoEntrega>
      </S.ConteudoCardEntrega>
    </form>
  )
}
