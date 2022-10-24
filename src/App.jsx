import { useState } from 'react'
import './App.css'
import BeginQuiz from './components/BeginQuiz'
import Main from './components/Main'

function App() {

  const [started, setStarted] = useState(false)

  function startQuiz() {
    setStarted(!started)
  }
  
  return (
    <div className="App">
      { started === false ? 
      <BeginQuiz startQuiz={startQuiz} />:
      <Main startedState={started}/>
      }
    </div>
  )
}

export default App
