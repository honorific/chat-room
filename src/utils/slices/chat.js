import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  chat: [],
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action) => {
      state.chat.forEach((ch) => {
        if (ch.name === action.payload.room) {
          state.chat.value = [
            ...state.chat.value,
            {
              uid: action.payload.uid,
              time: action.payload.time,
              msg: action.payload.msg,
            },
          ]
        }
      })
    },
  },
})

export const {addChat} = chatSlice.actions

export default themeSlice.reducer
