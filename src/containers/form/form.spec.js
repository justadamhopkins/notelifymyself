import React from 'react'
import { mount } from 'enzyme'
import { Form } from './form'


describe('@Form', () => {
  const props = {
    addCardEle: jest.fn()
  }
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render the component', () => {
    const form = mount(<Form/>)
    expect(form.find('.Form').exists()).toBe(true)
  })
  it('should add card', () => {
    const form = mount(<Form {...props}/>)
    form.find('form').simulate('submit')
    expect(props.addCardEle).toHaveBeenCalledTimes(1)
  })
})
