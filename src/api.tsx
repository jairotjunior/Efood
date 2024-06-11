import { useState, useEffect } from 'react'

import { useGetPratosApiQuery } from './services/api'

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
  const [restaurantesId, setRestaurantesId] = useState<pratosApi>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantesId(res))
  }, [id])

  return restaurantesId
}
