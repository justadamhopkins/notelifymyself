import { makeActionCreator } from '../../utils'
import { ADD_CARD, REMOVE_CARD } from '../constants'

export const removeCard = makeActionCreator(REMOVE_CARD, 'id')
console.log('TCL: removeCard', removeCard)

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    payload: { ...card }
  }
}
