import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Cards } from '../cards'
import { addCardEle } from '../../store/actions/card/cardActions'
import { FormElements } from '../../components/formElements'

export class Form extends Component {
  submit = async (values) => {
    const { addCardEle, categoryId } = this.props
    addCardEle({ ...values, catId: categoryId })
  }

  render() {
    const { submit } = this
    const { categoryId } = this.props
    return (
      <section>
        <FormElements
          send={submit}/>
          <Cards category={categoryId}/>
      </section>
    )
  }
}

Form.propTypes = {
  addCardEle: PropTypes.func,
  categoryId: PropTypes.string
}

export default connect(
  () => ({}),
  { addCardEle }
)(Form)
