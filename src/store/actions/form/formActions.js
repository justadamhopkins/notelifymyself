// import { makeActionCreator } from '../../utils'
import { ADD_FORM } from '../constants'

// export const addFormData = makeActionCreator(FORM_ADDDATA, '__v', 'id', 'title', 'subtitle', 'pictures', 'note')

export const addFormData = (formData) => {
  return {
    type: ADD_FORM,
    payload: { ...formData }
  }
}
