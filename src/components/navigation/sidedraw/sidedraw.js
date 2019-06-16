import React from 'react'
import PropTypes from 'prop-types'
import { NavigationItems } from '../navigationItems'
import styles from './styles.css'

const Sidedraw = ({ isVisible }) => {
  return (
    <div className={[styles.Sidedraw, isVisible ? styles.open : styles.close].join(' ')}>
    <NavigationItems />
    </div>
  )
}

export default Sidedraw

Sidedraw.propTypes = {
  isVisible: PropTypes.bool
}
