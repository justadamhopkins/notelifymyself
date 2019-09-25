// import { makeActionCreator } from '../../utils'
import { ADD_CARD } from '../constants'

// export const addFormData = makeActionCreator(FORM_ADDDATA, '__v', 'id', 'title', 'subtitle', 'pictures', 'note')

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    payload: { ...card }
  }
}
