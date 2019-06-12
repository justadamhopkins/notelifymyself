import React from 'react'
import { mount } from 'enzyme'
import { Layout } from '.'


describe('<Layout/>', () => {
  it('Should render component', () => {
    const layout = mount(<Layout/>)
    expect(layout).toMatchSnapshot()
  })
  it('initializes the sidedrawvisible state', () => {
    const layout = mount(<Layout/>)
    expect(layout.find('.Hamburger').length).toEqual(1)
    expect(layout.find('.animated').exists()).toBe(false)
  })
  it('sideDrawToggleHandler toggles the sidedraw/top nav state', () => {
    const layout = mount(<Layout/>)
    layout.find('.Hamburger').simulate('click')
    layout.update()
    expect(layout.find('.animated').exists()).toBe(true)
    expect(layout.find('.open').length).toBe(2)
  })
})
