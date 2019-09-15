import React from 'react'
import { shallow } from 'enzyme'
import { TextArea } from '.'

describe('@TextArea', () => {
  const props = {
    rows: '11',
    cols: '10',
    label: 'my label'
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
})
