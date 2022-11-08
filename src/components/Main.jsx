import './main.css'
import { useEffect, useState } from 'react'
import Form from './Form'
import reconstruct from '../reconstruct'

export default function Main() {

    const [quizData, setQuizData] = useState([])
    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(true)
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
        // setTimeout(() => console.log(quizData), 5000)
        counter()
    }

    console.log(count)

    function counter() {
        const selectedAnswers = quizData.map(data => {
            return data.selected
        })
        const newCount = selectedAnswers.filter(value => value != false).length + 1
        setCount(newCount)
        changeDisabled(newCount)         
    }

    function changeDisabled(count) {
        if( count === 5) {
            setDisabled(false)
        }
    }

    let buttonStyle = {}

    function checkStyles(count){
        if ( count === 5 ) {
            const buttonStyle = {
                opacity: 1
            }
        }
        return buttonStyle
    }
    checkStyles(count)

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
                    style={buttonStyle}
                    disabled={disabled}>
                    Check Answers
                </button>
            </div>
        </div>
    )
}