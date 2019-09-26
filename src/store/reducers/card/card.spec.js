import { addCard } from './card'

describe('@addCard', () => {
  describe('when adding a card', () => {
    const mockState = {}
    const action = {
      type: 'ADD_CARD',
      payload: {
        title: 'Mr',
        subtitle: 'Adam',
        _id: '123'
      }
    }
    it('should add the component to the store', () => {
      const addMyCard = addCard(mockState, action)
      const expected = { 123: { title: 'Mr', subtitle: 'Adam', _id: '123' } }
      expect(addMyCard).toEqual(expected)
    })
  })
})
