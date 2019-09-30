import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import { Input } from '../formElements/input'
import { Button } from '../button'
import styles from './styles.css'

const Category = ({ addCategory }) => {
  return (
  <Form
    onSubmit={addCategory}
    initialValues={{}}
    validate={() => { // pass values
    }}>
  {({ handleSubmit }) => (
    <form className={styles.Category} onSubmit={(handleSubmit)}>
      <div>
        <Field
          component={Input}
          name={'Category'}
          type={'text'}
          label={''}/>
        <Button
          type={'submit'}
          buttonState={'category'}
          buttonCopy={'Add Category'}/>
      </div>
    </form>
  )}
</Form>
  )
}

Category.propTypes = {
  addCategory: PropTypes.func
}

export default Category
