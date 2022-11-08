export default function Answer(props) {

    const { selected, answer, questionId, holdAnswer } = props

    let styles = {}

    function styler() {
        if (answer === selected) {
            styles = {
                backgroundColor: "#4D5B9E",
                color: "#F5F7FB"
            }
        }
        return styles
    }
    
    styler()
    
    
    return (
        <div
            style={styles}
            className="quizz--form__btn"
            onClick={() => holdAnswer(answer, questionId)}>
            {answer}
        </div>
    )
}