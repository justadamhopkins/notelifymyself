import { ADD_CATEGORY } from '../constants'

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: { ...category }
  }
}

export const addCategoryEle = (catId) => {
  return async dispatch => {
    const response = await fetch(process.env.baseUrl + '/category', {
      method: 'POST',
      body: JSON.stringify({ ...catId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    dispatch(addCategory(data))
  }
}
