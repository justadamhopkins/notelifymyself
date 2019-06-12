import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Sidedraw = ({ isVisible }) => {
  return (
    <div className={[styles.Sidedraw, isVisible ? styles.open : styles.close].join(' ')}>
    <h1>hrjfrhjfhrfh</h1>
    </div>
  )
}

export default Sidedraw

Sidedraw.propTypes = {
  isVisible: PropTypes.bool
}
