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
  },
})

export const {setUsers, addUserWithCords, resetUsersAndCords} =
  usersSlice.actions

export default usersSlice.reducer
