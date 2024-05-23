import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  chatMenuOpen: [],
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    addChatopen: (state, action) => {
      state.chatMenuOpen.push(action.payload)
    },
    resetChatOpen: (state, action) => {
      state.chatMenuOpen = [action.payload]
    },
    closeAllChatMenus: (state) => {
      state.chatMenuOpen.map((ch) => {
        ch.show = false
      })
    },
  },
})

export const {addChatopen, resetChatOpen, closeAllChatMenus} =
  generalSlice.actions

export default generalSlice.reducer
