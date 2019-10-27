import React from 'react'
import { shallow } from 'enzyme'
import { TextArea } from '.'

describe('@TextArea', () => {
  const props = {
    rows: '11',
    cols: '10',
    label: 'my label',
    input: {
      onChange: jest.fn()
    },
    meta: {
      error: {},
      touched: {}
    }
  }
  it('should the component', () => {
    const textarea = shallow(<TextArea {...props}/>)
    expect(textarea.length).toBe(1)
  })
  it('should render the right amount of rows', () => {
    const textarea = shallow(<TextArea {...props}/>)
    expect(textarea.find('textarea').prop('rows')).toEqual('11')
  })
  it('should render the right amount of cols', () => {
    const textarea = shallow(<TextArea {...props}/>)
    expect(textarea.find('textarea').prop('cols')).toEqual('10')
  })
  it('should render label', () => {
    const textarea = shallow(<TextArea {...props}/>)
    expect(textarea.find('label').text()).toEqual('my label')
  })
  it('fires onChange event with a user action', () => {
    const select = shallow(<TextArea {...props}/>)
    const event = { target: { value: 'Your new Value' } }
    const { onChange } = props.input
    jest.resetAllMocks()
    select.find('textarea').simulate('change', event)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(event)
  })
})
