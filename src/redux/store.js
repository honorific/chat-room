import {configureStore} from '@reduxjs/toolkit'
import listenerMiddleware from './middlewares/listenerMiddleware'
import reducers from './reducers'

const store = configureStore({
  reducer: {
    rootReducer: reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          subscribe: (listener) => store.subscribe(listener),
        },
      },
    }).concat(listenerMiddleware.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export {store}
