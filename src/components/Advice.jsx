import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoadingSpinner from './LoadingSpinner'
import Separator from './Separator'
import DiceButton from './DiceButton'

const AdviceCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  min-width: 320px;
  width: 90%;
  max-width: 540px;
  min-height: 250px;
  padding-top: 30px;
  padding-bottom: 70px;
  padding-left: 30px;
  padding-right: 30px;
  margin-inline: auto;
  background-color: hsl(217, 19%, 24%);
  border-radius: 10px;
`
const Title = styled.h3`
  margin-bottom: 1.25rem;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: hsl(150, 100%, 66%);
  font-weight: 400;
`
const Text = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.75rem;
  color: hsl(193, 38%, 86%);
  font-weight: 800;
`

const DiceContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: hsl(150, 100%, 66%);
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  animation: fade-in 400ms linear;

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translate(-50%, 20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      transform: translate(-50%, 0);
    }
  }

  &:hover {
    box-shadow: 0 0 30px 5px hsl(150, 100%, 66%);
  }
`

export default function Advice({ title, text, isLoading, petitionHandler }) {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true)
    }, 3000)
  })


  const diceClickHandler = () => {
    setShowButton(() => false)
    petitionHandler()
  }

  return (
    <AdviceCard>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Title>{title}</Title>
          <Text>"{text}"</Text>
          <Separator />
          {showButton && (
            <DiceContainer onClick={diceClickHandler}>
              <DiceButton fill={'#202733'} />
            </DiceContainer>
          )}
        </>
      )}
    </AdviceCard>
  )
}
