export default function Answer(props) {

    const { selected, answer, questionId, holdAnswer, check, correct } = props

    let styles = {}

    function styler() {
        if ( check && answer === correct ) {
            styles = {
                backgroundColor: "#94D7A2",
                cursor: "default"
            }
        } else if (check && answer === selected && selected !== correct) { 
            styles = {
                backgroundColor: "#F8BCBC",
                border: "1px solid #F8BCBC",
                opacity: "0.55",
                cursor: "default"
            }
        }  else if (check && answer !== selected) {
            styles = {
                opacity: "0.3",
                backgroundColor: "#F5F7FB",
                cursor: "default"
            }
        } else if ( answer === selected ) {
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