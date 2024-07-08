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
      state.usersAndCords[action.payload.index].cordY = action.payload.value
    },
    sortByCordY: (state) => {
      let max
      let swapper
      for (let i = 0; i < state.usersAndCords.length; i++) {
        max = i
        for (let j = i; j < state.usersAndCords.length; j++) {
          if (state.usersAndCords[j].cordY > state.usersAndCords[max].cordY) {
            max = j
          }
        }
        swapper = state.usersAndCords[max]
        state.usersAndCords[max] = state.usersAndCords[i]
        state.usersAndCords[i] = swapper
      }
      state.usersAndCords = state.usersAndCords
    },
  },
})

export const {
  setUsers,
  addUserWithCords,
  resetUsersAndCords,
  changeCordY,
  sortByCordY,
} = usersSlice.actions

export default usersSlice.reducer
