import React from 'react'
import { mount } from 'enzyme'
import { Sidedraw } from '.'

describe('@Sidedraw', () => {
  it('should render the component', () => {
    const sidebar = mount(<Sidedraw isVisible={false}/>)
    expect(sidebar.length).toBe(1)
  })
  it('should render the navigation items inside the sidebar', () => {
    const sidebar = mount(<Sidedraw isVisible={false}/>)
    expect(sidebar.find('NavigationItems').exists()).toBe(true)
  })
})
