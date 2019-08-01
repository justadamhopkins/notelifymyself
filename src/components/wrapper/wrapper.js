import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Wrapper = ({ children, isVisible }) => {
  return (
    <main className={[styles.Wrapper, isVisible ? styles.open : styles.close].join(' ')}>
      {children}
    </main>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool
}

export default Wrapper
