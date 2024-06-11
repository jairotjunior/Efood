import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pratosApi } from '../../api'

type garconState = {
  items: pratosApi[]
}

const initialState: garconState = {
  items: []
}

const sacolaSlice = createSlice({
  name: 'sacola',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<pratosApi>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = sacolaSlice.actions
export default sacolaSlice.reducer
