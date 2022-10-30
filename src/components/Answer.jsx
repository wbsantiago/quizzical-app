export default function Answer(props) {

    return (
        <div>
          <input
              className='quizz--form__btn'
              type="button"
              name="question"
              value={props.answer}
          />
        </div>
    )
}