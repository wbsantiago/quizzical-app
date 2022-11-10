import './main.css'
import { useEffect, useState } from 'react'
import Form from './Form'
import reconstruct from '../reconstruct'

export default function Main() {

    const [quizData, setQuizData] = useState([])
    const [selected, setSelected] = useState({})
    const [score, setScore] = useState("")
    const [check, setCheck] = useState(false)

    useEffect(() => {
        async function getQuestions() {
        const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple')
        const data = await res.json()
            const reconstructedData = reconstruct(data.results)
            setQuizData(reconstructedData)
        }
    getQuestions()
    }, [])   

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

    return (
        <div className="main">
            <h1 className='starter--title'>Quizzical</h1>
            <p className='main--category'>Category: Science: Computers</p>
            <div className='quizz--divider'></div>
            {questionElements}
            <div className="main--submit">
                <div className="main--score">Score {score}</div>
                <button 
                    type="submit" 
                    className="main--btn__check" 
                    style={allSelected() ? {opacity : 1} : undefined}
                    disabled={ !allSelected() }
                    onClick={handleClick}>
                    Check Answers
                </button>
            </div>
        </div>
    )
}

// para substituir o nanoid() o React agr tem o useId 
// pesquisar sobre