import { useState } from 'react'
import './App.css'
import BeginQuiz from './components/BeginQuiz'

function App() {

  const [started, setStarted] = useState(false)

  return (
    <div className="App">
      { started === false ? 
      <BeginQuiz />:
      <Main />
      }
    </div>
  )
}

export default App
