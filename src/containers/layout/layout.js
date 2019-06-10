import React, { Component } from 'react'
import { Header } from '../../components/navigation/header'

class Layout extends Component {
  state = {
    sideDrawVisible: false
  }

  sideDrawToggleHandler = () => {
    this.setState({ sideDrawVisible: !this.state.sideDrawVisible })
  }

  render() {
    return (
      <React.Fragment>
        <Header
          sideDrawToggle={this.sideDrawToggleHandler}
          isVisible={this.state.sideDrawVisible}
        />
        <main />
      </React.Fragment>
    )
  }
}

export default Layout
