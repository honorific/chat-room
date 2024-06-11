import {combineReducers} from 'redux'
import generalReducer from './slices/general'
import themeReducer from './slices/theme'

const reducers = combineReducers({
  general: generalReducer,
  theme: themeReducer,
})

export default reducers
