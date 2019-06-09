import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '.'
import styles from './styles.css'

describe('<Header/>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
  })
})
