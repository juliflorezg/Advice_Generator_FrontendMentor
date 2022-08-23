import React from 'react'
import styled from 'styled-components'

import mobileSeparator from '../images/pattern-divider-mobile.svg'
import desktopSeparator from '../images/pattern-divider-desktop.svg'

const SeparatorDiv = styled.div`
  background-image: url(${mobileSeparator});
  min-height: 20px;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) {
    background-image: url(${desktopSeparator});
  }
`

export default function Separator() {
  return <SeparatorDiv></SeparatorDiv>
}
