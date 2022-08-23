import { useEffect, useState } from 'react'
import './App.css'
import Advice from './components/Advice'

function App() {
  const [adviceId, setAdviceId] = useState('')
  const [adviceText, setAdviceText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [makePetition, setMakePetition] = useState(false)

  useEffect(() => {
    const getAdvice = async () => {
      setIsLoading(true)
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()

      setAdviceId(data.slip.id)
      setAdviceText(data.slip.advice)
      setIsLoading(false)
    }

    getAdvice()
  }, [makePetition])

  const petitionHandler = () => {
    setMakePetition(currentValue => !currentValue)
  }

  return (
    <div className="App">
      <Advice
        title={`Advice #${adviceId}`}
        text={adviceText}
        isLoading={isLoading}
        petitionHandler={petitionHandler}
      />
    </div>
  )
}

export default App
