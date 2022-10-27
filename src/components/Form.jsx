import { decode } from "html-entities"
import Answer from "./Answer"


export default function Form(props) {

  const {id, answers, correct, question } = props

  const answerElements = answers.map((ans, i) => (
    <Answer 
      key={id + i}
      correct={correct}
      answer={ans}
    />
  ))

  return (
    <form className='quizz--form'>
      <label htmlFor="question" className="quizz--form__label">
      {decode (question) }
      <div>{decode (answerElements) }</div>
        <div className='quizz--divider'></div>
      </label>
    </form>
  )
}