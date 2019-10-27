import React from 'react'
import PropTypes from 'prop-types'


const Input = ({ input, meta, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input
      {...input}
      placeholder={input.name}
      name={input.name}
      type={input.type}
      />
      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
    </div>
  )
}

Input.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  label: PropTypes.string
}

export default Input
