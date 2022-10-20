import { useState } from 'react'
import './App.css'
import BeginQuiz from './components/BeginQuiz'
import Main from './components/Main'

function App() {

  const [started, setStarted] = useState(false)

  function startQuiz() {
    setStarted(!started)
  }

console.log(started)

  return (
    <div className="App">
      { started === false ? 
      <BeginQuiz startQuiz={startQuiz} />:
      <Main />
      }
    </div>
  )
}

export default App
