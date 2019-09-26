import makeActionCreator from './actionGen'

const MOCK_ACTION = 'MOCK_ACTION'

describe('@makeActionCreator', () => {
  describe('given an action type and a list of properties', () => {
    const action = makeActionCreator(MOCK_ACTION, 'name', 'value', 'id')

    it('should return a redux action function', () => {
      expect(action).toBeInstanceOf(Function)
    })
    describe('when the action is triggered', () => {
      it('should return an action object', () => {
        const actionObject = action('name', 'value', 'id')
        const expected = {
          type: MOCK_ACTION,
          payload: {
            name: 'name',
            value: 'value',
            id: 'id'
          }
        }
        expect(actionObject).toEqual(expected)
      })
    })
  })
})
