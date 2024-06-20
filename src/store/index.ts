import { configureStore } from '@reduxjs/toolkit'
import garconReducer from './reducers/garcon'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    garcon: garconReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
