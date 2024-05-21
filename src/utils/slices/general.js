import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  chatMenuOpen: false,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    openChatMenuOpen: (state) => {
      state.chatMenuOpen = true
    },
    closeChatMenuOpen: (state) => {
      state.chatMenuOpen = false
    },
  },
})

export const {openChatMenuOpen, closeChatMenuOpen} = generalSlice.actions

export default generalSlice.reducer
