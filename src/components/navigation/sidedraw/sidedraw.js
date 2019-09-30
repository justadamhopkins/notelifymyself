import React from 'react'
import PropTypes from 'prop-types'
import { NavigationItems } from '../navigationItems'
import { Category } from '../../category'
import styles from './styles.css'

const Sidedraw = ({ isVisible, addCategory }) => {
  return (
    <div className={[styles.Sidedraw, isVisible ? styles.open : styles.close].join(' ')}>
    <Category addCategory={addCategory}/>
    <NavigationItems />
    </div>
  )
}

export default Sidedraw

Sidedraw.propTypes = {
  isVisible: PropTypes.bool,
  addCategory: PropTypes.func
}
