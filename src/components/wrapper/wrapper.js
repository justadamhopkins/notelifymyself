import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../navigation/header'
import styles from './styles.css'

const Wrapper = ({ children, isVisible, toggleSideDraw }) => {
  return (
    <div className={[styles.Wrapper, isVisible ? styles.open : styles.close].join(' ')}>
      <Header
      sideDrawToggle={toggleSideDraw}
      isVisible={isVisible}/>
      <main>
        {children}
      </main>
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  toggleSideDraw: PropTypes.func
}

export default Wrapper
