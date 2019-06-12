import React, { useState } from 'react'
import { Header } from '../../components/navigation/header'
import { Sidedraw } from '../../components/navigation/sidedraw'

const Layout = () => {
  const [sideDrawVisible, setDrawState] = useState(false)

  const sideDrawToggleHandler = () => {
    setDrawState(!sideDrawVisible)
  }

  return (
    <React.Fragment>
      <Header
        sideDrawToggle={sideDrawToggleHandler}
        isVisible={sideDrawVisible}
      />
      <Sidedraw
        isVisible={sideDrawVisible}/>
      <main />
    </React.Fragment>
  )
}

export default Layout
