import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCategory } from '../../store/actions/category'
import { Sidedraw } from '../../components/navigation/sidedraw'
import { Wrapper } from '../../components/wrapper'

export class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = { sideDrawVisible: false }
  }

  sideDrawToggleHandler = () => {
    const { sideDrawVisible } = this.state
    this.setState({ sideDrawVisible: !sideDrawVisible })
  }

  addCategory = (vals) => {
    const { addCategory } = this.props
    const _id = Math.random().toString().replace('0.', '')
    const mergeId = { ...vals, _id }
    addCategory(mergeId)
  }

  render() {
    const { sideDrawVisible } = this.state
    const { sideDrawToggleHandler, addCategory } = this
    const { children, category } = this.props
    return (
    <React.Fragment>
      <Sidedraw
        isVisible={sideDrawVisible}
        addCategory={addCategory}
        categoryList={category}/>
      <Wrapper
        children={children}
        isVisible={sideDrawVisible}
        toggleSideDraw={sideDrawToggleHandler}/>
    </React.Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  addCategory: PropTypes.func,
  category: PropTypes.object
}

export default connect(
  (state) => ({
    category: state.category
  }),
  { addCategory }
)(Layout)
