export const addCard = (state, action) => {
  const { payload } = action
  return { ...state, [payload._id]: { ...payload } }
}
