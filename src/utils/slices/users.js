import {createSlice} from '@reduxjs/toolkit'
import cookies from './cookies'

const initialState = {
  users: [],
  usersAndCords: [],
  loggedInAs: cookies.get('loggedInAs'),
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
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
    loginUser: (state, action) => {
      state.users.push(action.payload)
      state.loggedInAs = action.payload
    },
  },
})

export const {
  setUsers,
  addUserWithCords,
  resetUsersAndCords,
  changeCordY,
  sortByCordY,
  sortArrayOfUsers,
  loginUser,
} = usersSlice.actions

export default usersSlice.reducer
