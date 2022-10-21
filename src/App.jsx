import { useEffect, useState } from 'react'
import './App.css'
import BeginQuiz from './components/BeginQuiz'
import Main from './components/Main'

function App() {

  const [started, setStarted] = useState(false)
  const [allQuestions, setALLQuestions] = useState([])

  // {
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answers: ["",
  //                       "",
  //                       ""
  //   ]
  // }

  function startQuiz() {
    setStarted(!started)
  }

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple')
      const data = await res.json()
      setALLQuestions(data.results)
    }
    getQuestions()
  }, [started])

  console.log(allQuestions)

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
