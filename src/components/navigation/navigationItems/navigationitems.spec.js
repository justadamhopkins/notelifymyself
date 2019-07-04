import React from 'react'
import { mount } from 'enzyme'
import { NavigationItems } from '.'

describe('@NavigationItems', () => {
  it('should render the component', () => {
    const navigationWrapper = mount(<NavigationItems/>)
    expect(navigationWrapper.length).toBe(1)
  })
  it('should render list items inside the navigation wrapper', () => {
    const navigationWrapper = mount(<NavigationItems/>)
    expect(navigationWrapper.find('NavigationItem').exists()).toBe(true)
  })
})
