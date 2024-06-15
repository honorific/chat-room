import {combineReducers} from 'redux'
import generalReducer from './slices/general'
import themeReducer from './slices/theme'
import templateReducer from './slices/template'

const reducers = combineReducers({
  general: generalReducer,
  theme: themeReducer,
  template: templateReducer,
})

export default reducers
