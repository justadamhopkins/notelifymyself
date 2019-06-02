import { mockUpdate } from '../../reducers/mock'

const createReducers = (actionName = '') => {
  return function componentProperty(state = {}, action = {}) {
    switch (action.type) {
      case `MOCK_${actionName}`: return mockUpdate(state, action)
      default: return state
    }
  }
}

export default createReducers
