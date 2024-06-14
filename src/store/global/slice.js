import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  products: [],
  sidebar: false
}

export const globalSlice = createSlice({
  name: 'app/global',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar
    },
  },
})

export const { toggleSidebar } = globalSlice.actions

export default globalSlice.reducer