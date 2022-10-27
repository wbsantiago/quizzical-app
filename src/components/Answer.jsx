export default function Answer(props) {

    return (
        <div className="div--pre">
          <input
              className='quizz--form__btn'
              type="button"
              id="question"
              name="question"
              value={props.answer}
          />
        </div>
    )
}