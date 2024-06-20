import {combineReducers} from 'redux'
import generalReducer from './slices/general'
import themeReducer from './slices/theme'
import templateReducer from './slices/template'
import usersReducer from './slices/users'

const reducers = combineReducers({
  general: generalReducer,
  theme: themeReducer,
  template: templateReducer,
  users: usersReducer,
})

export default reducers
