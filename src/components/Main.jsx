import './main.css'
import { useEffect, useState } from 'react'
import Form from './Form'
import reconstruct from '../reconstruct'

export default function Main() {

    const [quizData, setQuizData] = useState([])

    useEffect(() => {
        async function getQuestions() {
        const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple')
        const data = await res.json()
            const reconstructedData = reconstruct(data.results)
            setQuizData(reconstructedData)
        }
    getQuestions()
    }, [])

    console.log(quizData)

    // const alternatives = data.map(question => [
    //     {
    //     "answers": [question['correct_answer'],
    //     ...question['incorrect_answers']]}
    // ].sort(() => Math.random() * 10 - 5)
    // )

    // const alts = alternatives.flat(1)

    
    // const questions = data.map(quizz => [
    //     {
    //         "question":[quizz['question']]
    //     }
    // ]).flat(1)  

    const questionElements = quizData.map(question => (
        <Form
          key={question.key}
          id={question.id}
          question={question.question}
          correct={question.correct}
          answers={question.answers}
        />
    ))

    return (
        <div className="main">
            {questionElements}
        </div>
    )
}