import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  chatMenuOpen: [],
  openner: true,
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
    setchatOpen: (state) => {
      state.chatMenuOpen = !state.chatMenuOpen
    },
    setOpenner: (state) => {
      state.openner = !state.openner
    },
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

export const {
  openChatMenuOpen,
  closeChatMenuOpen,
  setOpenner,
  setchatOpen,
  addChatopen,
  resetChatOpen,
  closeAllChatMenus,
} = generalSlice.actions

export default generalSlice.reducer
