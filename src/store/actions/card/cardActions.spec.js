import { addCard, removeCard } from './cardActions'
import { ADD_CARD, REMOVE_CARD } from '../constants'

describe('@cardActions', () => {
  it('should create an addCard action object', () => {
    const data = { title: 'mr', subtitle: 'adam' }
    const expected = {
      type: ADD_CARD,
      payload: {
        title: 'mr',
        subtitle: 'adam'
      }
    }
    const result = addCard(data)
    expect(result).toEqual(expected)
  })
  it('should create an card with an id thats being remved', () => {
    const data = '12345'
    const expected = {
      type: REMOVE_CARD,
      payload: {
        id: '12345'
      }
    }
    const result = removeCard(data)
    expect(result).toEqual(expected)
  })
})
