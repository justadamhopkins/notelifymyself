import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addCard, removeCard, removeCardEle, addCardEle, fetchCards, resetCard } from './cardActions'
import { ADD_CARD, REMOVE_CARD, RESET_CARD } from '../constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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
  it('should create an card with an id thats being removed', () => {
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
  it('should create an object that resets the state', () => {
    const data = {}
    const expected = {
      type: RESET_CARD,
      payload: {
        resetState: {}
      }
    }
    const result = resetCard(data)
    expect(result).toEqual(expected)
  })
  describe('@Card async actions', () => {
    const OLD_ENV = process.env
    process.env.baseUrl = 'http://localhost:3001/api'
    beforeEach(() => {
      process.env = { ...OLD_ENV }
    })
    afterEach(() => {
      fetchMock.reset()
    })
    it('adds card to store on sucessfull response from server', async () => {
      const mockedData = { id: 1111, name: 'adam' }
      const store = mockStore({ cards: { } })
      fetchMock.post(process.env.baseUrl + '/cards/add', {
        body: { mockedData },
        headers: { 'content-type': 'application/json' }
      })
      const expectedActions = [
        { type: ADD_CARD, payload: { mockedData } }
      ]

      const thunk = addCardEle(mockedData)
      await thunk(store.dispatch)

      expect(store.getActions()).toEqual(expectedActions)
    })
    it('removes card from store on successful response from server', async () => {
      const mockData = '4444'
      const store = mockStore({ cards: { } })
      fetchMock.post(process.env.baseUrl + '/cards/remove', {
        body: { _id: mockData },
        headers: { 'content-type': 'application/json' }
      })
      const expectedActions = [
        { type: REMOVE_CARD, payload: { id: mockData } }
      ]

      const thunk = removeCardEle(mockData)
      await thunk(store.dispatch)

      expect(store.getActions()).toEqual(expectedActions)
    })
    it('fetches card by category', async () => {
      const store = mockStore({ cards: { } })
      const data = [
        {
          _id: '5db1ffc14e92f11f0b2d7951',
          pictures: 'animals',
          title: 'effw'
        }
      ]
      const expected = {
        '5db1ffc14e92f11f0b2d7951': {
          _id: '5db1ffc14e92f11f0b2d7951',
          pictures: 'animals',
          title: 'effw'
        }
      }
      const catId = 'nature'
      fetchMock.get(process.env.baseUrl + `/category/${catId}`, data)
      const expectedActions = [
        { type: 'RESET_CARD', payload: { resetState: {} } },
        { type: 'ADD_CARD', payload: { cards: expected, list: true } }
      ]

      const thunk = fetchCards(catId)
      await thunk(store.dispatch)

      expect(store.getActions()).toEqual(expectedActions)
    })
    it('does not add card by category is there are no cards', async () => {
      const store = mockStore({ cards: { } })
      const data = []
      const catId = 'nature'
      fetchMock.get(process.env.baseUrl + `/category/${catId}`, data)
      const expectedActions = [
        { type: 'RESET_CARD', payload: { resetState: {} } }
      ]

      const thunk = fetchCards(catId)
      await thunk(store.dispatch)

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
