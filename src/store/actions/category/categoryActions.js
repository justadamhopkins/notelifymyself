import { ADD_CATEGORY } from '../constants'

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: { ...category }
  }
}
