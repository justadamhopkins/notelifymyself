import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card } from '../../components/card'
import { removeCardEle, fetchCards } from '../../store/actions/card/cardActions'

export class Cards extends Component {
  deleteCard = (event) => {
    const { parentElement } = event.target
    const { id } = parentElement.parentElement.dataset
    const { removeCardEle } = this.props
    removeCardEle(id)
  }

  componentDidUpdate(prevProps) {
    const { category, fetchCards } = this.props
    if (category !== prevProps.category) fetchCards(category)
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
  removeCardEle: PropTypes.func,
  fetchCards: PropTypes.func,
  category: PropTypes.string
}

export default connect(
  (state) => ({
    cards: state.card
  }),
  { removeCardEle, fetchCards }
)(Cards)
