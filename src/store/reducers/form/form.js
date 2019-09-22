export const addData = (state, action) => {
  const { payload } = action
  return { ...state, [payload._id]: { ...payload } }
}
