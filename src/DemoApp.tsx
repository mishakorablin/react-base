import React from 'react'

import { HelloHeader } from '~/components/HelloHeader'
import { useGreeting } from '~/hooks/useGreeting'
import { styled } from '~/theme'

const Window = styled.article`
  font-family: Helvetica, sans-serif;
  padding: 10px 30px;
  line-height: 1.5em;
`

export const DemoApp = () => {
  const greeting = useGreeting()

  return (
    <Window>
      <HelloHeader>{greeting}</HelloHeader>

      <p>
        This is just a simple starting point for you to try out new ideas in an
        environment that simulates our Sandy React Apps
      </p>
    </Window>
  )
}
