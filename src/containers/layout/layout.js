import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Header } from '../../components/navigation/header'
import { Sidedraw } from '../../components/navigation/sidedraw'
import { Wrapper } from '../../components/wrapper'

const Layout = (props) => {
  const [sideDrawVisible, setDrawState] = useState(false)

  const sideDrawToggleHandler = () => {
    setDrawState(!sideDrawVisible)
  }

  return (
    <React.Fragment>
      <Sidedraw
        isVisible={sideDrawVisible}/>
        <Header
        sideDrawToggle={sideDrawToggleHandler}
        isVisible={sideDrawVisible}
      />
      <Wrapper
        children={props.children}
        isVisible={sideDrawVisible}/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
