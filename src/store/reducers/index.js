import { combineReducers } from 'redux'
import { createReducers } from '../utils'

const rootReducer = combineReducers({
  mock: createReducers('STATE')
})

export default rootReducer
