import { addCard } from './cardActions'
import { ADD_CARD } from '../constants'

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
})
