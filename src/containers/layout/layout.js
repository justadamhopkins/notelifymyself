import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Sidedraw } from '../../components/navigation/sidedraw'
import { Wrapper } from '../../components/wrapper'

const Layout = ({ children }) => {
  const [sideDrawVisible, setDrawState] = useState(false)

  const sideDrawToggleHandler = () => {
    setDrawState(!sideDrawVisible)
  }

  const addCategory = (vals) => {
    console.log('TCL: addCategory -> vals', vals)
  }

  return (
    <React.Fragment>
      <Sidedraw
        isVisible={sideDrawVisible}
        addCategory={addCategory}/>
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
