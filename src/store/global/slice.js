import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  products: []
}

export const globalSlice = createSlice({
  name: 'app/global',
  initialState,
  reducers: {
    updateAppState: (state) => {
      state.value += 1
    },
  },
})

export const { updateAppState } = globalSlice.actions

export default globalSlice.reducer