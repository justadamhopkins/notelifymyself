export const createCardList = (array) => array.reduce((obj, item) => {
  return { ...obj, [item._id]: { ...item } }
}, {})
