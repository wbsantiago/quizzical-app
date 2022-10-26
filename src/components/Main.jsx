import './main.css'
import { useEffect, useState } from 'react'
import Form from './Form'
import Answers from './Answers'

export default function Main() {
   
    const [allQuestions, setAllQuestions] = useState([])

    useEffect(() => {
        async function getQuestions() {
        const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple')
        const data = await res.json()
        setAllQuestions(data.results)
        }
    getQuestions()
    }, [])

    const alternatives = allQuestions.map(question => [
        question['correct_answer'],
        ...question['incorrect_answers']
    ].sort(() => Math.random() * 10 - 5)
    )

//     <Answers 
//         answers={q}
//     />

    const questionElements = allQuestions.map(question => (
        <Form
          key={question.question}
          question={question.question}
          alternatives={alternatives}
          correctAnswer={question.correct_answer}
        />
    ))

    console.log(questionElements)

    return (
        <div className="main">
            {questionElements}
        </div>
    )
}