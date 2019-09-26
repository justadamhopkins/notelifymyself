import { addCard, removeCard } from '../../reducers/card/card'

const createReducers = (actionName = '') => {
  return function componentProperty(state = {}, action = {}) {
    switch (action.type) {
      case `ADD_${actionName}`: return addCard(state, action)
      case `REMOVE_${actionName}`: return removeCard(state, action)
      default: return state
    }
  }
}

export default createReducers
