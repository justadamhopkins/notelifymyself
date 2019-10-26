import { addCard, removeCard } from '.'

describe('@addCard', () => {
  describe('when adding a card', () => {
    it('should add the component to the store', () => {
      const mockState = {}
      const action = {
        type: 'ADD_CARD',
        payload: {
          title: 'Mr',
          subtitle: 'Adam',
          _id: '123'
        }
      }
      const addMyCard = addCard(mockState, action)
      const expected = { 123: { title: 'Mr', subtitle: 'Adam', _id: '123' } }
      expect(addMyCard).toEqual(expected)
    })
    it('should add component list to store', () => {
      const mockState = {}
      const action = {
        type: 'ADD_CARD',
        payload: {
          cards: {
            123: { title: 'Mr', subtitle: 'Adam', _id: '123' }
          },
          list: true
        }
      }
      const addMyCard = addCard(mockState, action)
      const expected = { 123: { title: 'Mr', subtitle: 'Adam', _id: '123' } }
      expect(addMyCard).toEqual(expected)
    })
    it('should remove the component to the store', () => {
      const mockState = { 123: { title: 'Mr', subtitle: 'Adam', _id: '123' } }
      const action = {
        type: 'REMOVE_CARD',
        payload: {
          id: '123'
        }
      }
      const removeMyCard = removeCard(mockState, action)
      const expected = {}
      expect(removeMyCard).toEqual(expected)
    })
  })
})
