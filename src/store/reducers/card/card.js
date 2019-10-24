export const addCard = (state, action) => {
  const { payload } = action
  if (payload.list) {
    return { ...state, ...payload.cards }
  }
  return { ...state, [payload._id]: { ...payload } }
}

export const removeCard = (state, action) => {
  const { payload } = action
  const stateCopy = Object.assign({}, state)
  delete stateCopy[payload.id]
  return stateCopy
}
