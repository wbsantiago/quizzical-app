import './main.css'
import Form from './Form.jsx' 
import { useEffect, useState } from 'react'


export default function Main() {
   
    const [allQuestions, setALLQuestions] = useState([])

    useEffect(() => {
        async function getQuestions() {
        const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple')
        const data = await res.json()
        setALLQuestions(data.results)
        }
    getQuestions()
    }, [])

    const questionElements = allQuestions.map(question => (
        <Form 
          key={question.question}
          question={question.question}
          correctAnswer={question.correct_answer}
          incorrectAnswers={question.incorrect_answers}
        /> 
    ))

    //const choicesOption =    
        
    return (
        <div className="main">
            {questionElements}
        </div>
    )
}