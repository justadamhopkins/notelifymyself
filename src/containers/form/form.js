import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCardEle } from '../../store/actions/card/cardActions'
import { FormElements } from '../../components/formElements'

export class Form extends Component {
  submit = async (values) => {
    const { addCardEle, categoryId } = this.props
    addCardEle({ ...values, catId: categoryId })
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
  addCardEle: PropTypes.func,
  categoryId: PropTypes.string
}

export default connect(
  () => ({}),
  { addCardEle }
)(Form)
