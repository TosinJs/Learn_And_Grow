const QuestionComponent = ({ country, capitalOptions, setScore, score }) => {
    const { name, capital, flags } = country
    const checkAnswer = (event) => {
        const value = event.target.name
        console.log(capital[0], value)
        if (value === capital[0]) {
            setScore(score + 1)
            console.log(2)
            return 
        } else console.log(4)
    }
    return (
        <div>
            <div>
                <h3>{`What is the Capital of ${name.common}`}</h3>
                <p>{score}</p>
            </div>
            <div>
                {
                capitalOptions.map((option, index) => {
                    return(
                        <div key={index}>
                            <button onClick={(event) => checkAnswer(event)} name={option}>{option}</button>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default QuestionComponent;