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
          ch.messages.push({
            sender: action.payload.sender,
            receiver: action.payload.receiver,
            dateTime: action.payload.dateTime,
            msg: action.payload.msg,
          })
          newRoom = false
        }
      })
      if (newRoom === true) {
        return [
          {
            room: action.payload.room,
            messages: [
              {
                sender: action.payload.sender,
                receiver: action.payload.receiver,
                dateTime: action.payload.dateTime,
                msg: action.payload.msg,
              },
            ],
          },
        ]
      }
    },
  },
})

export const {addChat} = chatSlice.actions

export default chatSlice.reducer
