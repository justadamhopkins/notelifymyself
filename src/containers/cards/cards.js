import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card } from '../../components/card'
import { removeCardEle } from '../../store/actions/card/cardActions'

export class Cards extends Component {
  deleteCard = (event) => {
    const { parentElement } = event.target
    const { id } = parentElement.parentElement.dataset
    const { removeCardEle } = this.props
    removeCardEle(id)
  }

  render() {
    const { cards } = this.props
    return (
    <div>
      <Card
      card={cards}
      deletedCard={this.deleteCard}/>
    </div>
    )
  }
}

Cards.propTypes = {
  cards: PropTypes.object,
  removeCardEle: PropTypes.func
}

export default connect(
  (state) => ({
    cards: state.card
  }),
  { removeCardEle }
)(Cards)
