import { decode } from "html-entities"
import Answer from "./Answer"


export default function Form(props) {

  const {answers, correct, questionId, question, holdAnswer, selected } = props

  
  const answerElements = answers.map((answer) => (
    <Answer 
    key={answer}
    correct={correct}
    answer={answer}
    questionId={questionId}
    selected={selected}
    holdAnswer={holdAnswer}
  />
  ))
    
  console.log("form", question, selected)
  return (
    <div className='quizz--form'>
      <div>{decode (question) }</div>
      <div className="quizz--div__answer">{decode (answerElements) }</div>
      <div className='quizz--divider'></div>
    </div>
  )
}