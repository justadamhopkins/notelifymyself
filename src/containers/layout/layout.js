import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Sidedraw } from '../../components/navigation/sidedraw'
import { Wrapper } from '../../components/wrapper'

const Layout = ({ children }) => {
  const [sideDrawVisible, setDrawState] = useState(false)

  const sideDrawToggleHandler = () => {
    setDrawState(!sideDrawVisible)
  }

  return (
    <React.Fragment>
      <Sidedraw
        isVisible={sideDrawVisible}/>
      <Wrapper
        children={children}
        isVisible={sideDrawVisible}
        toggleSideDraw={sideDrawToggleHandler}/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
