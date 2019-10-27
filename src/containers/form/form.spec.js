import React from 'react'
import { shallow } from 'enzyme'
import { Form } from './form'
import { FormElements } from '../../components/formElements'
import { Cards } from '../cards'


describe('@Form', () => {
  const props = {
    addCardEle: jest.fn()
  }
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render the form component', () => {
    const form = shallow(<Form/>)
    console.log(form.debug())
    expect(form.find(FormElements).exists()).toBe(true)
  })
  it('should render the card component', () => {
    const form = shallow(<Form/>)
    expect(form.find(Cards).exists()).toBe(true)
  })
  xit('should add card', () => {
    const form = shallow(<Form {...props}/>)
    form.find(FormElements).shallow().shallow().find('form').simulate('submit')
    expect(props.addCardEle).toHaveBeenCalledTimes(1)
  })
})
