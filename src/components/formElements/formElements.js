import React from 'react'
import { Form, Field } from 'react-final-form'
import { Input } from './input'
import { Select } from './select'
import { TextArea } from './textarea'
import styles from './styles.css'
const options = ['ops1', 'ops2', 'ops3', 'ops4']
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
      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.LeftBlock}>
        <Field
          component={Input}
          name={'Title'}
          type={'text'}
          label={'Title Label'}/>
        <Field
          component={Input}
          name={'Title subtitle'}
          type={'text'}
          label={'Title subtitle Label'}/>
        </div>
        <div className={styles.Rightblock}>
        <Field
          component={Select}
          label={'Title Select'}
          name={'Title'}
          ops={options}/>
        <Field
          component={TextArea}
          label={'Title TextArea'}
          name={'Title'}
          rows={'4'}
          cols={'20'}/>
        </div>
        <div>BUTTON</div>
      </form>
    )}
  </Form>
  )
}

export default FormElements
