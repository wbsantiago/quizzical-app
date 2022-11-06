import './main.css'
import { useEffect, useState } from 'react'
import Form from './Form'
import reconstruct from '../reconstruct'

export default function Main() {

    const [quizData, setQuizData] = useState([])
    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(true)

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
          key={question.key}
          id={question.id}
          question={question.question}
          correct={question.correct}
          answers={question.answers}
          holdAnswer={holdAnswer}
        />
    ))

    function holdAnswer(ans) {
        setQuizData(prevQuizData => prevQuizData.map(data => {
                return data.answers.includes(ans) ?
                {...data, selected: ans} : 
                data
            }))
        console.log(quizData)
        // count()
    }

    // function count() {
        
    // }

    function changeDisabled(count) {
        if( count === 5) {
            setDisabled(false)
        }
    }

    let buttonStyle = {}

    function checkStyle(count) {
        if ( count === 5) {
            const buttonStyle = {
                opacity: 1
            }
        }
        return buttonStyle
    }
    checkStyle(count)

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