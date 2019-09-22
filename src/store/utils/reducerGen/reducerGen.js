import { addData } from '../../reducers/form'

const createReducers = (actionName = '') => {
  return function componentProperty(state = {}, action = {}) {
    switch (action.type) {
      case `ADD_${actionName}`: return addData(state, action)
      default: return state
    }
  }
}

export default createReducers
