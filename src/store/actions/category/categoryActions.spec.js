import { addCategory } from '.'
import { ADD_CATEGORY } from '../constants'

describe('@categoryActions', () => {
  it('should create an addCard action object', () => {
    const data = { category: 'Animals', _id: 111 }
    const expected = {
      type: ADD_CATEGORY,
      payload: {
        category: 'Animals',
        _id: 111
      }
    }
    const result = addCategory(data)
    expect(result).toEqual(expected)
  })
})
