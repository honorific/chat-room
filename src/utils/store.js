import {configureStore} from '@reduxjs/toolkit'
import generalReducer from './slices/general'

export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
})
