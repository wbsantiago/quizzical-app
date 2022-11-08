import './main.css'
import { useEffect, useState } from 'react'
import Form from './Form'
import reconstruct from '../reconstruct'

export default function Main() {

    const [quizData, setQuizData] = useState([])
    const [count, setCount] = useState(0)
    const [selected, setSelected] = useState({})

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
          question={question.question}
          questionId={question.id}
          correct={question.correct}
          answers={question.answers}
          selected={selected[question.id]}
          holdAnswer={holdAnswer}
        />
    ))

    function holdAnswer(ans, questionId) {
        setQuizData(prevQuizData => prevQuizData.map(question => {
            if (question.id === questionId && question.answers.includes(ans)) {
                question.selected = selected[question.id] = ans
                setSelected(selected)
            } return question
        }))
    }

    function allSelected() {
        if (quizData.length <= 0) return false
        return Object.keys(selected).length === quizData.length
    }
    
    return (
        <div className="main">
            <h1 className='starter--title'>Quizzical</h1>
            <p className='main--category'>Category: Science: Computers</p>
            <div className='quizz--divider'></div>
            {questionElements}
            <div className="main--submit">
                <button 
                    type="submit" 
                    className="main--btn__check" 
                    style={allSelected() ? {opacity : 1} : undefined}
                    disabled={ !allSelected() }>
                    Check Answers
                </button>
            </div>
        </div>
    )
}