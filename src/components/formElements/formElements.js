import React from 'react'
import { Form, Field } from 'react-final-form'
import { Input } from './input'
import { Select } from './select'
import { TextArea } from './textarea'
import { Button } from '../button'
import styles from './styles.css'
const options = ['animals', 'tech', 'people', 'nature']
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
          label={'Card Title'}/>
        <Field
          component={Input}
          name={'Title subtitle'}
          type={'text'}
          label={'Card subtitle'}/>
        </div>
        <div className={styles.Rightblock}>
        <Field
          component={Select}
          label={'Picture Type'}
          name={'Title'}
          ops={options}/>
        <Field
          component={TextArea}
          label={'Note'}
          name={'Title'}
          rows={'4'}
          cols={'20'}/>
        </div>
        <Button
          buttonState={'active'}
          buttonCopy={'Submit'}/>
      </form>
    )}
  </Form>
  )
}

export default FormElements
