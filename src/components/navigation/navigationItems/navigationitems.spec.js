import React from 'react'
import { mount } from 'enzyme'
import { NavigationItems } from '.'

describe('@NavigationItems', () => {
  const props = {
    categoryList: { 111: { category: 'Nature', _id: 111 } }
  }
  it('should render the component', () => {
    const navigationWrapper = mount(<NavigationItems {...props}/>)
    expect(navigationWrapper.length).toBe(1)
  })
  it('should render list items inside the navigation wrapper', () => {
    const navigationWrapper = mount(<NavigationItems {...props}/>)
    expect(navigationWrapper.find('NavigationItem').exists()).toBe(true)
  })
})
