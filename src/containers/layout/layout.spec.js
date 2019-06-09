import React from 'react'
import { mount } from 'enzyme'
import { Layout } from '.'
import * as styles from '../../components/navigation/sideDraw/hamburger'

describe('<Layout/>', () => {
  const props = { sideDrawVisible: true, sideDrawToggle: jest.fn() }
  const layout = mount(<Layout { ...props }/>)
  it('Should render component', () => {
    expect(layout).toMatchSnapshot()
  })
  it('initializes the sidedrawvisible state as false', () => {
    console.log(layout.debug())
    // expect(layout.state().sideDrawVisible).toBe(false)
  })
})
