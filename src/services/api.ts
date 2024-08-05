import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { pratosApi } from '../api'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery?: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment?: {
    card: {
      name: string
      number: number
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getPratosApi: builder.query<pratosApi[], void>({
      query: () => 'restaurantes'
    }),
    getPratosApiId: builder.query<pratosApi, number>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetPratosApiQuery,
  useGetPratosApiIdQuery,
  usePurchaseMutation
} = api

export default api
