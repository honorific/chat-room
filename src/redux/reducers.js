import {combineReducers} from 'redux'
import generalReducer from './slices/general'
import themeReducer from './slices/theme'
import templateReducer from './slices/template'
import usersReducer from './slices/users'
import chatReducer from './slices/chat'
import socketReducer from './slices/socket'

const reducers = combineReducers({
  general: generalReducer,
  socket: socketReducer,
  theme: themeReducer,
  template: templateReducer,
  users: usersReducer,
  chat: chatReducer,
})

export default reducers
