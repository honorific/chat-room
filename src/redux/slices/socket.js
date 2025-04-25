import {createSlice} from '@reduxjs/toolkit'
import {loginUser} from './users'

const initialState = {
  chatSocketConnection: false,
}

export const generalSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    connectChatSocketConnection: (state, _action) => {
      state.chatSocketConnection = true
    },
    disconnectChatSocketConnection: (state, _action) => {
      state.chatSocketConnection = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state) => {
      // When login succeeds, set socketConnection to true
      state.chatSocketConnection = true
    })
    builder.addCase(loginUser.rejected, (state) => {
      // When login succeeds, set socketConnection to true
      state.chatSocketConnection = false
    })
  },
})

export const {connectChatSocketConnection, disconnectChatSocketConnection} =
  generalSlice.actions

export default generalSlice.reducer
