import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCard } from '../../store/actions/card/cardActions'
import { FormElements } from '../../components/formElements'

export class Form extends Component {
  submit = async (values) => { // todo write test
    const { addCard } = this.props
    const response = await fetch(process.env.baseUrl + '/addCard', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    addCard(data)
  }

  render() {
    const { submit } = this
    return (
      <section>
        <FormElements
          send={submit}/>
      </section>
    )
  }
}

Form.propTypes = {
  addCard: PropTypes.func
}

export default connect(
  () => ({}),
  { addCard }
)(Form)
