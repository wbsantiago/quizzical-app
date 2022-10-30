import { nanoid } from "nanoid"

export default function Answer(props) {

    const { selected, answer, holdAnswer } = props

    let styles = {}

    function styler() {
        if (answer === selected) {
            styles = {
                backgroundColor: "#4D5B9E",
                color: "#F5F7FB"
            } 
        } else {
                styles = {
                    backgroundColor: ""
                }
            }
            return styles
        }
        styler()
    return (
        <div>
            <input
                className='quizz--form__btn'
                type="button"
                name="question"
                key={ nanoid() }
                value={answer}
                onClick={() => holdAnswer(answer)}
                style={styles}
            />
        </div>
    )
}
    

