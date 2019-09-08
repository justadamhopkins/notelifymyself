import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Button = ({ buttonState, buttonCopy }) => {
  return (
    <button className={[styles.Button, styles[buttonState]].join(' ')}>{buttonCopy}</button>
  )
}

Button.propTypes = {
  buttonState: PropTypes.string,
  buttonCopy: PropTypes.string
}

export default Button
