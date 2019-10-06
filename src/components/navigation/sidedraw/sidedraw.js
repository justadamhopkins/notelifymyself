import React from 'react'
import PropTypes from 'prop-types'
import { NavigationItems } from '../navigationItems'
import { Category } from '../../category'
import styles from './styles.css'

const Sidedraw = ({ isVisible, addCategory, categoryList }) => {
  return (
    <div className={[styles.Sidedraw, isVisible ? styles.open : styles.close].join(' ')}>
    <Category addCategory={addCategory}/>
    <NavigationItems categoryList={categoryList} />
    </div>
  )
}


Sidedraw.propTypes = {
  isVisible: PropTypes.bool,
  addCategory: PropTypes.func,
  categoryList: PropTypes.object
}

export default Sidedraw
