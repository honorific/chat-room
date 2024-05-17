import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  chatMenuOpen: false,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setChatMenuOpen: (state) => {
      state.chatMenuOpen = !state.chatMenuOpen
    },
  },
})

export const {setChatMenuOpen} = generalSlice.actions

export default generalSlice.reducer
