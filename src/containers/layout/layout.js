import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Header } from '../../components/navigation/header'
import { Sidedraw } from '../../components/navigation/sidedraw'

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
      <main>
      {props.children}
      </main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
