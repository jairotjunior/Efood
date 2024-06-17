import { useGetPratosApiQuery, useGetPratosApiIdQuery } from './services/api'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type pratosApi = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export const DadosApi = () => {
  const { data: restaurante } = useGetPratosApiQuery()

  return restaurante
}

export const DadosRestaurante = (id: number) => {
  const { data } = useGetPratosApiIdQuery(id)

  return data
}
