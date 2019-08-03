import React from 'react'
import { shallow } from 'enzyme'
import { NavigationItem } from '.'

describe('@NavigationItem', () => {
  it('should render the component', () => {
    const navigationLi = shallow(<NavigationItem>Children</NavigationItem>)
    expect(navigationLi.length).toBe(1)
  })
})
