import { combineReducers } from 'redux'
import { createReducers } from '../utils'

const rootReducer = combineReducers({
  card: createReducers('CARD'),
  category: createReducers('CATEGORY')
})

export default rootReducer
