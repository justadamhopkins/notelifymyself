import { resetState } from '.'

describe('@reset', () => {
  it('should reset state back to default', () => {
    const action = {
      type: 'RESET_CARD',
      payload: {
        resetState: {}
      }
    }
    const reset = resetState(action)
    const expected = {}
    expect(reset).toEqual(expected)
  })
})
