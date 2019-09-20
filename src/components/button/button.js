import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Button = ({ buttonState, buttonCopy, type }) => {
  return (
    <button type={type} className={[styles.Button, styles[buttonState]].join(' ')}>{buttonCopy}</button>
  )
}

Button.propTypes = {
  buttonState: PropTypes.string,
  buttonCopy: PropTypes.string,
  type: PropTypes.string
}

export default Button
