import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  onlineUserMovable: [''],
}
export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    addMovable: (state, action) => {
      state.onlineUserMovable = [...new Set(state.onlineUserMovable)]
      state.onlineUserMovable.push(action.payload)
    },
  },
})

export const {addMovable} = templateSlice.actions

export default templateSlice.reducer
