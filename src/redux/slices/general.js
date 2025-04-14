import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  chatMenuOpen: [],
  chatBox: [],
  zIndex: 1001,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    addChatopen: (state, action) => {
      state.chatMenuOpen.push(action.payload)
    },
    resetChatOpen: (state, action) => {
      if (action.payload !== undefined) {
        state.chatMenuOpen = [action.payload]
      } else {
        state.chatMenuOpen = []
      }
    },
    closeAllChatMenus: (state) => {
      state.chatMenuOpen.map((ch) => {
        ch.show = false
      })
    },
    addChatBox: (state, action) => {
      state.chatBox.push({
        username: action.payload.username,
        zIndex: action.payload.zIndex,
      })
    },
    addZIndex: (state, action) => {
      state.zIndex++
    },
  },
})

export const {
  addChatopen,
  resetChatOpen,
  closeAllChatMenus,
  addChatBox,
  addZIndex,
} = generalSlice.actions

export default generalSlice.reducer
