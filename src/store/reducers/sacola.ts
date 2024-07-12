import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../api'

type sacolaState = {
  items: Cardapio[]
  isOpen: boolean
}

const initialState: sacolaState = {
  items: [],
  isOpen: false
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
    }
  }
})

export const { add, open, close, remove } = sacolaSlice.actions
export default sacolaSlice.reducer
