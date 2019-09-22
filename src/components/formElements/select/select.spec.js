import React from 'react'
import { shallow } from 'enzyme'
import { Select } from '.'

describe('@Select', () => {
  const props = {
    ops: ['adam'],
    label: 'my label',
    input: {
      onChange: jest.fn()
    }
  }
  it('should render the component', () => {
    const select = shallow(<Select {...props}/>)
    expect(select.length).toBe(1)
  })
  it('should render options', () => {
    const select = shallow(<Select {...props}/>)
    expect(select.find('select').children().length).toBe(1)
  })
  it('should render label', () => {
    const select = shallow(<Select {...props}/>)
    expect(select.find('label').text()).toEqual('my label')
  })
  it('fires onChange event with a user action', () => {
    const select = shallow(<Select {...props}/>)
    const event = { target: { value: 'Your new Value' } }
    const { onChange } = props.input
    jest.resetAllMocks()
    select.find('select').simulate('change', event)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(event)
  })
})
