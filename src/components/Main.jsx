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

    const allAnswers = allQuestions.map(answers => {
        const answersArray = []
        answersArray.push(answers.incorrect_answers)
        const answersFlated = answersArray.flat(1)
        return answersFlated
    })

    // allAnswers.push( allQuestions.map(correct => {
    //     for (let i = 0; i < 5; i++) {
            
    //     }
    // }))

    console.log(allAnswers)

    // <Answers
    //   answers={answersArray.correct_answers}
    // />

    const questionElements = allQuestions.map(question => (
        <Form 
          key={question.question}
          question={question.question}
          allAnswers={allAnswers}
          correctAnswer={question.correct_answer}
        /> 
    ))

    return (
        <div className="main">
            {questionElements}
        </div>
    )
}