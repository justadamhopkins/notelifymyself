import { makeActionCreator } from '../../utils'
import { createCardList } from '../utils'
import { ADD_CARD, REMOVE_CARD, RESET_CARD } from '../constants'

export const removeCard = makeActionCreator(REMOVE_CARD, 'id')

export const resetCard = makeActionCreator(RESET_CARD, 'resetState')

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    payload: { ...card }
  }
}


export const fetchCards = (catId) => {
  return async dispatch => {
    dispatch(resetCard({}))
    const response = await fetch(process.env.baseUrl + `/category/${catId}`)
    const data = await response.json()
    if (data.length === 0) return
    const result = createCardList(data)
    dispatch(addCard({ cards: { ...result }, list: true }))
  }
}

export const addCardEle = (values) => {
  return async dispatch => {
    const response = await fetch(process.env.baseUrl + '/cards/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    dispatch(addCard({ ...data, catId: values.catId }))
  }
}

export const removeCardEle = (id) => {
  return async dispatch => {
    const response = await fetch(process.env.baseUrl + '/cards/remove', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    dispatch(removeCard(data._id))
  }
}
