import React from 'react'
import { Form, Field } from 'react-final-form'
import { Input } from './input'

const FormElements = () => {
  return (
    <Form
      onSubmit={() => {}}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Please enter a valid email address.'
        }
        if (!values.password) {
          errors.password = 'Please enter a password of at least 6 characters'
        }
        return errors
      }}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          component={Input}
          name={'Title'}
          type={'text'}
          label={'Title Label'}/>
      </form>
    )}
  </Form>
  )
}

export default FormElements
