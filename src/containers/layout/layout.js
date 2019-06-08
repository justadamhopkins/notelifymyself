import React, { useState } from 'react'
import { Header } from '../../components/navigation/header'

const Layout = () => {
  const [sideDrawVisible, setDrawState] = useState(false)


  const sideDrawToggleHandler = () => {
    console.log('fired')
    setDrawState(!sideDrawVisible)
  }

  return (
    <React.Fragment>
      <Header
      sideDrawToggle={sideDrawToggleHandler}
      isVisible={sideDrawVisible}/>
      <main>
      </main>
    </React.Fragment>
  )
}

export default Layout
