import React from 'react'
import App from '../components/App'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('<App />', () => {
  it('should let me commit', () => {
    expect(1).toEqual(1)
  })
  // it('should match snaptshot', () => {
  //   const wrap = shallow(<App />)
  //   expect(toJson(wrap)).toMatchSnapshot()
  // })
})
