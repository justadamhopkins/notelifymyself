import { combineReducers } from 'redux'
import { createReducers } from '../utils'

const rootReducer = combineReducers({
  card: createReducers('CARD')
})

export default rootReducer
