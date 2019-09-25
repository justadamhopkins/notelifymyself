import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card } from '../../components/card'

class Cards extends Component {
  render() {
    const { cards } = this.props
    return (
    <div>
      <Card card={cards}/>
    </div>
    )
  }
}

Cards.propTypes = {
  cards: PropTypes.object
}

export default connect(
  (state) => ({
    cards: state.card
  }),
  { }
)(Cards)
