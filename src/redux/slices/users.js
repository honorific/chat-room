import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import cookies from '../../utils/cookie/initialize'
import {authApiRegister} from '../../api/authApi'
import {setAuthCookie} from '../../utils/cookie/setAuthCookie'
import {authUser} from '../../socket/socketActions/chat/auth'

const initialState = {
  users: [],
  usersAndCords: [],
  loggedInAs: cookies.get('loggedInAs') || '',
  loginLoading: false,
}

let mainStore

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async ({gender, username}, thunkAPI) => {
    const response = await authApiRegister({
      gender,
      username,
    })
    mainStore = thunkAPI.getState()
    console.log(response)
    return response.data
  },
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users.push(action.payload)
    },
    addUserWithCords: (state, action) => {
      state.usersAndCords.push(action.payload)
    },
    resetUsersAndCords: (state) => {
      state.usersAndCords = []
    },
    changeCordY: (state, action) => {
      state.usersAndCords[action.payload.index].cordY = action.payload.value
    },
    sortByCordY: (state) => {
      let min
      let swapper
      for (let i = 0; i < state.usersAndCords.length; i++) {
        min = i
        for (let j = i; j < state.usersAndCords.length; j++) {
          if (state.usersAndCords[j].cordY < state.usersAndCords[min].cordY) {
            min = j
          }
        }
        swapper = state.usersAndCords[min]
        state.usersAndCords[min] = state.usersAndCords[i]
        state.usersAndCords[i] = swapper
      }
      state.usersAndCords = state.usersAndCords
    },
    setActiveChatting: (state, action) => {
      state.users.forEach((user) => {
        if (user.username === action.payload.username) {
          user.chatting = true
        }
      })
    },
    removeActiveChatting: (state, action) => {
      state.users.forEach((user) => {
        if (user.username === action.payload) {
          delete user.chatting
        }
      })
    },
    sortArrayOfUsers: (state, action) => {
      let holder = state.users[action.payload[0]]
      state.users[action.payload[0]] = state.users[action.payload[1]]
      state.users[action.payload[1]] = holder
    },
    resetUsers: (state, _action) => {
      state.users = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const {username, gender, token} = action.payload
      state.loggedInAs = username
      state.loginLoading = false
      setAuthCookie(username, gender, token)
      authUser(gender, username, mainStore)
    })
    builder.addCase(loginUser.pending, (state) => {
      state.loginLoading = true
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loggedInAs = 'failed'
      state.loginLoading = false
      console.log('payload when rejected: ', action)
    })
  },
})

export const {
  setUsers,
  addUserWithCords,
  resetUsersAndCords,
  changeCordY,
  sortByCordY,
  sortArrayOfUsers,
  setActiveChatting,
  removeActiveChatting,
  resetUsers,
} = usersSlice.actions

export default usersSlice.reducer
