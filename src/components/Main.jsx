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