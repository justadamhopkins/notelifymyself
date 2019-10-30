import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addCategory, addCategoryEle } from '.'
import { ADD_CATEGORY } from '../constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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
  describe('Category async actions', () => {
    const OLD_ENV = process.env
    process.env.baseUrl = 'http://localhost:3001/api'
    beforeEach(() => {
      process.env = { ...OLD_ENV }
    })
    afterEach(() => {
      fetchMock.reset()
    })
    it('adds category to store on successful response from server', async () => {
      const catId = 'nature'
      const store = mockStore({ category: { } })
      fetchMock.post(process.env.baseUrl + '/category', {
        body: JSON.stringify({ catId }),
        headers: { 'content-type': 'application/json' }
      })
      const expectedActions = [
        { type: ADD_CATEGORY, payload: { catId } }
      ]

      const thunk = addCategoryEle(catId)
      await thunk(store.dispatch)

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
