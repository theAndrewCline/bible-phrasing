import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import NavBar from '../components/NavBar'

describe('<NavBar />', () => {
    it('should match snapshot', () => {
        const wrap = shallow(<NavBar />)
        expect(toJson(wrap)).toMatchSnapshot()
    })
})