import { decode } from "html-entities"
import Answer from "./Answer"


export default function Form(props) {

  const {id, answers, correct, question, holdAnswer, selected } = props

  const answerElements = answers.map((ans, i) => (
    <Answer 
      key={id + i}
      correct={correct}
      answer={ans}
      selected={selected}
      holdAnswer={holdAnswer}
    />
  ))

  return (
    <div className='quizz--form'>
      <div>{decode (question) }</div>
      <div className="quizz--div__answer">{decode (answerElements) }</div>
      <div className='quizz--divider'></div>
    </div>
  )
}