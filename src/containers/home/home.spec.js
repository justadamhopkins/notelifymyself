import React from 'react'
import { mount } from 'enzyme'
import Home from './home'


describe('@Home', () => {
  it('should render the component', () => {
    const home = mount(<Home/>)
    expect(home.find('.home').exists()).toBe(true)
  })
})
