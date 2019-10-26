import { addCard, removeCard } from '../../reducers/card'
import { resetState } from '../../reducers/reset'


const createReducers = (actionName = '') => {
  return function componentProperty(state = {}, action = {}) {
    switch (action.type) {
      case `ADD_${actionName}`: return addCard(state, action)
      case `REMOVE_${actionName}`: return removeCard(state, action)
      case `RESET_${actionName}`: return resetState(action)
      default: return state
    }
  }
}

export default createReducers
