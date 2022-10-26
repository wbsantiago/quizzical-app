export default function Form(props) {
  return (
    <form className='quizz--form'>
      <label htmlFor="question" className="quizz--form__label">
      {props.question}      
        <div className='quizz--divider'></div>
      </label>
    </form>
  )
}