import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { pratosApi } from '../api'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getPratosApi: builder.query<pratosApi, void>({
      query: () => '${id}'
    })
  })
})

export const { useGetPratosApiQuery } = api

export default api
