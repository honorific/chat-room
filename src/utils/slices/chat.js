import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {chatApiAddChat} from '../../api/chatApi'

const initialState = [
  {
    room: '',
    messages: [],
    left: 100,
    top: 100,
    open: false,
  },
]

export const addAsyncChat = createAsyncThunk(
  'chat/addAsyncChat',
  async ({sender, receiver, room, dateTime, msg}, _thunkAPI) => {
    const response = await chatApiAddChat({
      sender,
      receiver,
      dateTime,
      msg,
    })
    console.log(response)
    return {data: response.data, room}
  },
)

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
          ch.open = true
          newRoom = false
        }
      })
      if (newRoom === true) {
        const chatLength = state.length
        if (state[chatLength - 1].room === '') {
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
              top: 100,
              left: 100,
              open: true,
            },
          ]
        } else {
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
            left: state[state.length - 1].left + 40,
            top: state[state.length - 1].top + 40,
            open: true,
          })
        }
      }
    },
    changeChatCords: (state, action) => {
      state[action.payload.index].top = action.payload.top
      state[action.payload.index].left = action.payload.left
    },
    chatCloser: (state, action) => {
      state[action.payload.index].open = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsyncChat.fulfilled, (state, action) => {
      let newRoom = true
      state.map((ch) => {
        if (action.payload.room === ch.room) {
          const messagesLength = ch.messages.length
          // check to open a new private chat window or not
          if (ch.messages[messagesLength - 1].msg !== '') {
            ch.messages.push({
              sender: action.payload.data.sender,
              receiver: action.payload.data.receiver,
              dateTime: action.payload.data.dateTime,
              msg: action.payload.data.msg,
            })
          } else {
            ch.messages[messagesLength - 1].sender = action.payload.data.sender
            ch.messages[messagesLength - 1].receiver =
              action.payload.data.receiver
            ch.messages[messagesLength - 1].dateTime =
              action.payload.data.dateTime
            ch.messages[messagesLength - 1].msg = action.payload.data.msg
          }
          ch.open = true
          newRoom = false
        }
      })
      if (newRoom === true) {
        const chatLength = state.length
        if (state[chatLength - 1].room === '') {
          return [
            {
              room: action.payload.room,
              messages: [
                {
                  sender: action.payload.data.sender,
                  receiver: action.payload.data.receiver,
                  dateTime: action.payload.data.dateTime,
                  msg: action.payload.data.msg,
                },
              ],
              top: 100,
              left: 100,
              open: true,
            },
          ]
        } else {
          state.push({
            room: action.payload.room,
            messages: [
              {
                sender: action.payload.data.sender,
                receiver: action.payload.data.receiver,
                dateTime: action.payload.data.dateTime,
                msg: action.payload.data.msg,
              },
            ],
            left: state[state.length - 1].left + 40,
            top: state[state.length - 1].top + 40,
            open: true,
          })
        }
      }
    })
  },
})

export const {addChat, changeChatCords, chatCloser} = chatSlice.actions

export default chatSlice.reducer
