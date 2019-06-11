import React from 'react'
import { mount } from 'enzyme'
import { Layout } from '.'
import styles from '../../components/navigation/sideDraw/hamburger/styles.css'

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
  it('sideDrawToggleHandler toggles the sidedraw state', () => {
    const layout = mount(<Layout/>)
    // const instance = layout.instance()
    // instance.sideDrawToggleHandler()
    layout.find('.Hamburger').simulate('click')
    console.log(layout.debug())
    layout.update()
    expect(layout.find('.animated').exists()).toBe(true)
  })
})



// it('sideDrawToggleHandler toggles the sidedraw state', () => {
//   const layout = mount(<Layout/>)
//   const instance = layout.instance()
//   instance.sideDrawToggleHandler()
//   layout.update()
//   expect(layout.find('.animated').exists()).toBe(true)
// })