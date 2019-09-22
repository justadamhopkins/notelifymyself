import React from 'react'
import { shallow } from 'enzyme'
import { Button } from '.'

describe('@Button', () => {
  const props = {
    buttonState: 'active',
    buttonCopy: 'submit',
    type: 'submit'
  }
  it('should render a button', () => {
    const button = shallow(<Button {...props}/>)
    expect(button.length).toBe(1)
  })
  it('should render a button state', () => {
    const button = shallow(<Button {...props}/>)
    expect(button.find('.active').exists()).toBe(true)
  })
  it('should render button copy', () => {
    const button = shallow(<Button {...props}/>)
    expect(button.text()).toBe('submit')
  })
})
