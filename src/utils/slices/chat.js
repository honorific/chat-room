import {StarRateSharp} from '@mui/icons-material'
import {createSlice, current} from '@reduxjs/toolkit'

const initialState = [
  {
    room: '',
    messages: [],
  },
]

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action) => {
      let newRoom = true
      state.map((ch) => {
        if (action.payload.room === ch.room) {
          const messagesLength = ch.messages.length
          // check to open a new private chat windoe or not
          if (ch.messages[messagesLength - 1].msg !== '') {
            ch.messages.push({
              sender: action.payload.sender,
              receiver: action.payload.receiver,
              dateTime: action.payload.dateTime,
              msg: action.payload.msg,
            })
          } else {
            ch.messages[messagesLength - 1].sender = action.payload.sender
            ch.messages[messagesLength - 1].receiver = action.payload.receiver
            ch.messages[messagesLength - 1].dateTime = action.payload.dateTime
            ch.messages[messagesLength - 1].msg = action.payload.msg
          }
          newRoom = false
        }
      })
      if (newRoom === true) {
        state.push({
          room: action.payload.room,
          messages: [
            {
              sender: action.payload.sender,
              receiver: action.payload.receiver,
              dateTime: action.payload.dateTime,
              msg: action.payload.msg,
            },
          ],
        })
      }
    },
  },
})

export const {addChat} = chatSlice.actions

export default chatSlice.reducer
