export default function Form(props) { 

  return (
    <form className='quizz--form'>
      <label htmlFor="question" className="quizz--form__label">
      {props.question}
        <div className="div--pre">
          <input
              className='quizz--form__btn'
              type="button"
              id="question"
              name="question"
              value={props.correctAnswer}
          />
        </div>
        <div className='quizz--divider'></div>
      </label>
    </form>
  )
}
