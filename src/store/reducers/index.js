import { combineReducers } from 'redux'
import { createReducers } from '../utils'

const rootReducer = combineReducers({
  form: createReducers('FORM')
})

export default rootReducer
