import React from 'react'
import styled from 'styled-components'
import DiceButton from './DiceButton'

import dice from '../images/icon-dice.svg'

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  /* background-image: url(${dice}); */
  background-position: center;
  background-size: contain;
  animation: rotate .7s infinite linear;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    0% {
      transform: rotate(-180deg);
    }
  }

  svg {
    transform: scale(1.5);
  }
`

export default function LoadingSpinner() {
  return (
    <Spinner>
      <DiceButton fill={'hsl(150, 100%, 66%)'} />
    </Spinner>
  )
}
