import React from 'react'
import GridLayout from 'react-grid-layout'

import { Passages } from '../defintions/App'

type Props = {
  passages: Passages
}

function TargetPassage ({ passages }: Props) {

  return (
    <GridLayout className="layout" cols={1} rowHeight={8} width={1200} autoSize={true }>
      {passages.map((passage, i) => (

        <div key={i} data-grid={{x: 1, y: 1, w: 800, h: 1}}>{passage}</div>

      ))}
    </GridLayout>
  )

}

export default TargetPassage