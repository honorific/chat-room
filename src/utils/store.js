import {configureStore} from '@reduxjs/toolkit'
import reducers from './reducers'

export const store = configureStore({
  reducer: {
    rootReducer: reducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})
