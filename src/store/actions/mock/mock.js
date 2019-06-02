import makeActionCreator from '../../utils'
import { MOCK_STATE } from '../constants'

export const mockMe = makeActionCreator(MOCK_STATE, 'mockId')
