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
      validate={() => { // pass values
        // const errors = {}
        // if (!values.email) {
        //   errors.email = 'Please enter a valid email address.'
        // }
        // if (!values.password) {
        //   errors.password = 'Please enter a password of at least 6 characters'
        // }
        // return errors
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
  send: PropTypes.Func
}

export default FormElements
