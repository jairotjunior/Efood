import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pratosApi } from '../../api'

type garconState = {
  items: pratosApi[]
  isOpen: boolean
}

const initialState: garconState = {
  items: [],
  isOpen: false
}

const sacolaSlice = createSlice({
  name: 'sacola',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<pratosApi>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = sacolaSlice.actions
export default sacolaSlice.reducer
