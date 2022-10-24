import './main.css'


export default function Main(props) {
    

    // const questionElements = props.allQuestions.map(question => (
    //     <Form 
    //       key={question.question}
    //       question={question.question}
    //       correctAnswer={question.correct_answers}
    //       incorrectAnswers={question.incorrect_answers}
    //     /> 
    //   ))

    //console.log(props.formQuestions)
    
    return (
        <div className="main">
            <form className='quizz--form'>
                <label htmlFor="question" className="quizz--form__label">
                What does the term GPU stand for?
                    <div className="div--pre">
                        <input
                            className='quizz--form__btn'
                            type="button"
                            id="question"
                            name="question"
                            value="Graphics Processing Unit"
                        />
                        <input
                            className='quizz--form__btn'
                            type="button"
                            id="question"
                            name="question"
                            value="Gaming Processor Unit"
                        />
                        <input
                            className='quizz--form__btn'
                            type="button"
                            id="question"
                            name="question"
                            value="Graphite Producing Unit"
                        />
                        <input
                            className='quizz--form__btn'
                            type="button"
                            id="question"
                            name="question"
                            value="Graphical Proprietary Unit"
                        />
                    </div>
                    <div className='quizz--divider'></div>
                </label>
            </form>
        </div>
    )
}