import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { pratosApi } from '../api'

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
    })
  })
})

export const { useGetPratosApiQuery, useGetPratosApiIdQuery } = api

export default api
