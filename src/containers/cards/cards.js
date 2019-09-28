import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card } from '../../components/card'
import { removeCard } from '../../store/actions/card/cardActions'

export class Cards extends Component {
  deleteCard = async (event) => {
    const { parentElement } = event.target
    const { id } = parentElement.parentElement.dataset
    const { removeCard } = this.props
    removeCard(id)
    const response = await fetch(process.env.baseUrl + '/removeCard', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data
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
  removeCard: PropTypes.func
}

export default connect(
  (state) => ({
    cards: state.card
  }),
  { removeCard }
)(Cards)
