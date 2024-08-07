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
