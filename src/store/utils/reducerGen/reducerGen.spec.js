
import createReducers from './reducerGen'
import * as cardActions from '../../reducers/card/card'

jest.mock('../../reducers/card/card')

describe('@createReducers', () => {
  const mockReducer = createReducers('MOCK')
  const mockState = {}
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('when passed an action name', () => {
    it('should return a reducer function', () => {

      expect(mockReducer).toBeInstanceOf(Function)
    })

    describe('when the reducer is triggered', () => {
      describe('with ADD_CARD', () => {
        const mockAction = { type: 'ADD_MOCK', payload: {} }

        it('triggers updateState', () => {
          mockReducer(mockState, mockAction)

          expect(cardActions.addCard).toHaveBeenCalledTimes(1)
          expect(cardActions.addCard).toHaveBeenCalledWith(mockState, mockAction)
        })
      })
    })
  })
})
