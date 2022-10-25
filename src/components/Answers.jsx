export default function Answers(props) {
    return (
        <div className="div--pre">
          <input
              className='quizz--form__btn'
              type="button"
              id="question"
              name="question"
              value={props.answers}
          />
        </div>
    )
}