import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  chatMenuOpen: [],
  chatBox: [],
  leftDistance: [100],
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
    addLeftDistance: (state) => {
      state.leftDistance.push(
        state.leftDistance[state.leftDistance.length - 1] + 40,
      )
    },
  },
})

export const {
  addChatopen,
  resetChatOpen,
  closeAllChatMenus,
  addChatBox,
  addLeftDistance,
} = generalSlice.actions

export default generalSlice.reducer
