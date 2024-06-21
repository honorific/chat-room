import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  users: [],
  usersAndCords: [],
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
      state.usersAndCords[action.payload.index] = action.payload.value
    },
  },
})

export const {setUsers, addUserWithCords, resetUsersAndCords, changeCordY} =
  usersSlice.actions

export default usersSlice.reducer
