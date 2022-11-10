import { decode } from "html-entities"
import Answer from "./Answer"


export default function Form(props) {

  const {answers, correct, questionId, questionText, holdAnswer, selected, check } = props

  
  const answerElements = answers.map((answer) => (
    <Answer 
    key={answer}
    correct={correct}
    answer={answer}
    questionId={questionId}
    selected={selected}
    holdAnswer={holdAnswer}
    check={check}
  />
  ))
    
  // console.log(questionId, selected, "testes", correct)
  return (
    <div className='quizz--form'>
      <div>{ decode (questionText) }</div>
      <div className="quizz--div__answer">{ decode (answerElements) }</div>
      <div className='quizz--divider'></div>
    </div>
  )
}