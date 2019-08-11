import React from 'react'
import PropTypes from 'prop-types'


const Input = ({ input, meta, label }) => {
  return (
    <React.Fragment>
      <label>{label}</label>
      <input
      {...input}
      placeholder={input.name}
      type={input.type}
      {...meta.error && meta.touched && <span>{meta.error}</span>}
      />
    </React.Fragment>
  )
}

Input.propTypes = {
  meta: PropTypes.string,
  input: PropTypes.func,
  label: PropTypes.string
}

export default Input
