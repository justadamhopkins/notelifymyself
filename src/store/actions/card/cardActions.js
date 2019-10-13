import { makeActionCreator } from '../../utils'
import { ADD_CARD, REMOVE_CARD } from '../constants'

export const removeCard = makeActionCreator(REMOVE_CARD, 'id')

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    payload: { ...card }
  }
}

export const fetchCards = (catId) => {
  return async dispatch => {
    const response = await fetch(process.env.baseUrl + '/fetchCategory', {
      method: 'POST',
      body: JSON.stringify({ catId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    const arrayToObject = (array) => array.reduce((obj, item) => {
      return { ...obj, [item._id]: { ...item } }
    }, {})
    const result = arrayToObject(data)
    dispatch(addCard({ ...result, list: true }))
  }
}

export const addCardEle = (values) => {
  return async dispatch => {
    const response = await fetch(process.env.baseUrl + '/addCard', {
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
    const response = await fetch(process.env.baseUrl + '/removeCard', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    dispatch(removeCard(data._id))
  }
}
