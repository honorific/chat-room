import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import cookies from '../cookies'
import userApi from '../../api/userApi'

const initialState = {
  users: [],
  usersAndCords: [],
  loggedInAs: cookies.get('loggedInAs'),
  loginLoading: false,
}

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (username, thunkAPI) => {
    const response = await userApi.post('/register', {
      username,
    })
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
    sortArrayOfUsers: (state, action) => {
      let holder = state.users[action.payload[0]]
      state.users[action.payload[0]] = state.users[action.payload[1]]
      state.users[action.payload[1]] = holder
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.users.push({gender: 'male', username: action.payload.username})
      state.loggedInAs = action.payload.username
      state.loginLoading = false
      cookies.set('loggedInAs', action.payload.username, [
        '/',
        Date.now() + 3600,
      ])
    })
    builder.addCase(loginUser.pending, (state) => {
      state.loginLoading = true
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.loggedInAs = 'failed'
      state.loginLoading = false
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
} = usersSlice.actions

export default usersSlice.reducer
