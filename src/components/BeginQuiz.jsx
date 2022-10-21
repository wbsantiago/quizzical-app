import './beginQuiz.css'

export default function BeginQuiz(props) {
    return (
        <div className="starter--div">
            <h1 className='starter--title'>Quizzical</h1>
            <p className='starter--description'>5 questions about  the science of computer.</p>
            <button className='starter--btn' onClick={props.startQuiz}>Start quiz</button>
        </div>
    )
}