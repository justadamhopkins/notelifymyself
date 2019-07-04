import React from 'react'
// import PropTypes from 'prop-types'
import { NavigationItem } from './navigationItem'
import styles from './styles.css'

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem>Test 1</NavigationItem>
      <NavigationItem>Test 1</NavigationItem>
      <NavigationItem>Test 1</NavigationItem>
      <NavigationItem>Test 1</NavigationItem>
      <NavigationItem>Test 1</NavigationItem>
    </ul>
  )
}

export default NavigationItems
