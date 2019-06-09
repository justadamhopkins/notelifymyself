import React from 'react'
import { mount } from 'enzyme'
import { Layout } from '.'
import styles from '../../components/navigation/sideDraw/hamburger/styles.css'

describe('<Layout/>', () => {
  const props = { sideDrawVisible: false, sideDrawToggle: () => {} }
  const layout = mount(<Layout { ...props }/>)
  it('Should render component', () => {
    expect(layout).toMatchSnapshot()
  })
  it('initializes the sidedrawvisible state as false and sidedraw toggle as a func', () => {
    expect(layout.props().sideDrawVisible).toEqual(false)
  })
})
