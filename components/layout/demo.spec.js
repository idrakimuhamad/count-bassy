import React from 'react'
import { shallow } from 'enzyme'
import Demo from './demo'

describe('button', () => {
  it('should render without crashing', () => {
    let button = shallow(<Demo></Demo>)
  })

  it('should use the props given', () => {
    let props = {
      href: 'https://google.com',
      color: 'white',
      backgroundColor: 'green',
      text: 'Done'
    }

    let button = shallow(<Demo {...props}></Demo>)

    expect(button.find('a').props().children).toEqual(props.text)
    expect(button.find('a').props().href).toEqual(props.href)
    expect(button.find('a').props().style.color).toEqual(props.color)
    expect(button.find('a').props().style.backgroundColor).toEqual(props.backgroundColor)
  })

  it('should trigger the given function when clicked', () => {
    let props = {
      handleClick: jest.fn()
    }

    let button = shallow(<Demo {...props}></Demo>)

    button.find('a').simulate('click')

    expect(props.handleClick).toBeCalled()
  })
})
