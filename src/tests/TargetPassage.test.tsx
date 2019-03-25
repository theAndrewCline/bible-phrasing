import React from 'react'
import { shallow } from 'enzyme'
import ToJson from 'enzyme-to-json'

import TargetPassage from '../components/TargetPassage'
import { Passages } from '../defintions/App';

describe('<TargetPassage/>', () => {
  const mockPassages: Passages = []
  it('should matchsnapshot', () => {
    const wrap = shallow(<TargetPassage passages={mockPassages} />)
    expect(ToJson(wrap)).toMatchSnapshot()
  })
})