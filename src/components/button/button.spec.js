import React from 'react'
import { mount } from 'enzyme'
import { Button } from '.'

describe('@Button', () => {
  const props = {
    buttonState: 'active',
    buttonCopy: 'submit'
  }
  it('should render a button', () => {
    const button = mount(<Button {...props}/>)
    expect(button.length).toBe(1)
  })
  it('should render a button state', () => {
    const button = mount(<Button {...props}/>)
    expect(button.find('.active').exists()).toBe(true)
  })
  it('should render button copy', () => {
    const button = mount(<Button {...props}/>)
    expect(button.text()).toBe('submit')
  })
})
