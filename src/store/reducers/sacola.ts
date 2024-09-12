import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../api'

type sacolaState = {
  items: Cardapio[]
  isOpen: boolean
  etapa: number
}

const initialState: sacolaState = {
  items: [],
  isOpen: false,
  etapa: 0
}

const sacolaSlice = createSlice({
  name: 'sacola',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const Cardapio = state.items.find((item) => item.id === action.payload.id)

      if (!Cardapio) {
        state.items.push(action.payload)
      } else {
        alert('Prato já adicionado')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    avancaEtapa: (state) => {
      state.etapa = state.etapa + 1
    },
    retornaEtapa: (state) => {
      state.etapa = state.etapa - 1
    },
    zeraEtapa: (state) => {
      state.etapa = 0
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  avancaEtapa,
  retornaEtapa,
  zeraEtapa
} = sacolaSlice.actions
export default sacolaSlice.reducer
