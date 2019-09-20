import React from 'react'
import { FormElements } from '../../components/formElements'

const Form = () => {
  const submit = (values) => {
    console.log(values)
  }
  return (
    <section>
     <FormElements
     send={submit}/>
    </section>
  )
}

export default Form
