import './App.css'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import BeginQuiz from './components/BeginQuiz'
import reconstruct from './reconstruct'

function App() {

  const [started, setStarted] = useState(false)
  const [quizData, setQuizData] = useState([])
  const [selected, setSelected] = useState({})
  const [score, setScore] = useState("")
  const [check, setCheck] = useState(false)

  // console.log(quizData, started)
  
  useEffect(() => {
    async function getQuestions() {
      const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple')
      const data = await res.json()
      const reconstructedData = reconstruct(data.results)
      setQuizData(reconstructedData)
    }
    getQuestions()
  }, [started === true])   
  
  const questionElements = quizData.map(question => (
    <Form
      key={question.id}
      questionText={question.question}
      questionId={question.id}
      correct={question.correct}
      answers={question.answers}
      selected={selected[question.id]}
      holdAnswer={holdAnswer}
      check={check}
    />
  ))
        
  function startQuiz() {
    setStarted(!started)
  }

  function holdAnswer(ans, questionId) {
    if ( !check ) {
      setQuizData(prevQuizData => prevQuizData.map(question => {
        if (question.id === questionId && question.answers.includes(ans)) {
          question.selected = selected[question.id] = ans
          setSelected(selected)
        } return question
      }))
    }
  }

  function allSelected() {
    if (quizData.length <= 0) return false
    return Object.keys(selected).length === quizData.length
  }
  
  function handleClick() {        
    setCheck(true)
    let correctAnswers = 0
    for ( let i = 0; i < quizData.length ;i++ ) {
      if ( quizData[i].correct === quizData[i].selected ) {
          correctAnswers++
      }
    }
    setScore(`${correctAnswers}/ 5`)
  }

  function resetQuiz() {
    setQuizData([])
    setStarted(false)
    setCheck(false)
    setScore("")
    setSelected({})
  }
  
  return (
    <div className="App">
      { started === false ? 
      <BeginQuiz startQuiz={startQuiz} />:
      <div className="main">
        <h1 className='starter--title'>Quizzical</h1>
        <p className='main--category'>Category: Science: Computers</p>
        <div className='quizz--divider'></div>
        {questionElements}
        <div className="main--submit">
          <div className="main--score">Score {score}</div>
          { !check && <button 
              type="submit" 
              className="main--btn__check" 
              style={allSelected() ? {opacity : 1} : undefined}
              disabled={ !allSelected() }
              onClick={handleClick}>
              Check Answers
          </button>}
          { check && <div className='main--reset__btn' onClick={resetQuiz}>Play Again</div>}
        </div>
        </div>
      }
    </div>
  )
}

export default App
