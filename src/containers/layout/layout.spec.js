import React from 'react'
import { mount } from 'enzyme'
import { Layout } from './layout'


describe('<Layout/>', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  const props = {
    addCategory: jest.fn(),
    category: { 111: { category: 'Nature', _id: 111 } }
  }
  it('Should render component', () => {
    const layout = mount(<Layout {...props}/>)
    expect(layout).toMatchSnapshot()
  })
  it('initializes the sidedrawvisible state', () => {
    const layout = mount(<Layout {...props}/>)
    expect(layout.find('.Hamburger').length).toEqual(1)
    expect(layout.find('.animated').exists()).toBe(false)
  })
  it('sideDrawToggleHandler toggles the sidedraw/top nav state', () => {
    const layout = mount(<Layout {...props}/>)
    layout.find('.Hamburger').simulate('click')
    layout.update()
    expect(layout.find('.animated').exists()).toBe(true)
    expect(layout.find('.open').length).toBe(2)
  })
  it('should add category', () => {
    const layout = mount(<Layout {...props}/>)
    layout.find('.category').simulate('submit')
    expect(props.addCategory).toHaveBeenCalledTimes(1)
  })
})
