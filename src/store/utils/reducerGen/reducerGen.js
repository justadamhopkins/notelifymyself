import { addCard } from '../../reducers/card'

const createReducers = (actionName = '') => {
  return function componentProperty(state = {}, action = {}) {
    switch (action.type) {
      case `ADD_${actionName}`: return addCard(state, action)
      default: return state
    }
  }
}

export default createReducers
