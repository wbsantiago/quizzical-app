import './beginQuiz.css'

export default function BeginQuiz(props) {
    return (
        <div className="starter--div">
            <h1 className='starter--title'>Quizzical</h1>
            <p className='starter--description'>Some description if needed</p>
            <button className='starter--btn' onClick={props.startQuiz}>Start quiz</button>
        </div>
    )
}