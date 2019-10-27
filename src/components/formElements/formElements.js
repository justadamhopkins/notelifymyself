import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import { Input } from './input'
import { Select } from './select'
import { TextArea } from './textarea'
import { Button } from '../button'
import styles from './styles.css'
const options = ['animals', 'tech', 'people', 'nature']
const FormElements = ({ send }) => {
  return (
    <Form
      onSubmit={send}
      initialValues={{ pictures: 'animals' }}
      validate={(values) => { // pass values
        const errors = {}
        if (!values.title) {
          errors.title = 'Please enter a title'
        }
        if (!values.subtitle) {
          errors.subtitle = 'Please enter a subtitle'
        }
        if (!values.note) {
          errors.note = 'Please enter a note'
        }
        return errors
      }}>
    {({ handleSubmit }) => (
      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.LeftBlock}>
        <Field
          component={Input}
          name={'title'}
          type={'text'}
          label={'Card Title'}/>
        <Field
          component={Input}
          name={'subtitle'}
          type={'text'}
          label={'Card subtitle'}/>
        </div>
        <div className={styles.Rightblock}>
        <Field
          component={Select}
          label={'Picture Type'}
          name={'pictures'}
          ops={options}/>
        <Field
          component={TextArea}
          label={'Note'}
          name={'note'}
          rows={'4'}
          cols={'20'}/>
        </div>
        <Button
          type={'submit'}
          buttonState={'active'}
          buttonCopy={'Submit'}/>
      </form>
    )}
  </Form>
  )
}

FormElements.propTypes = {
  send: PropTypes.func
}

export default FormElements
