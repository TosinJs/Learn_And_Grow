import { useEffect, useState } from "react";
import { genRandomIndex, getRandom } from "../../utils";
import ButtonComponent from "./ButtonComponent";

const QuestionComponent = ({ questionCountry, options, score, setScore, quizType }) => {
    const { name, capital, flags } = questionCountry;
    const { png: flag } = flags
    const [questionOptions, setQuestionOptions] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        let questionOptions = getRandom(options, 4);
        const randomIndex = genRandomIndex(questionOptions);
        questionOptions.indexOf(name) === -1 ? questionOptions.splice(randomIndex, 1, name.common) : console.log("");
        setQuestionOptions(questionOptions)
    }, [name, options])
    return (
        <div className="central question">
            {
            quizType === "capitals" ? <h2>{capital} is the capital of ?</h2> : <div><div className="img-div"><img src={flag} alt="h" /></div><h2>is the flag of ?</h2></div>
            }
            <div>
                {
                questionOptions.map((questionOption, index) => {
                    let color = "white"
                    if (questionOption === name.common && disabled === true) {
                        color = "#47bd78"
                    }
                    return (
                        <ButtonComponent key={index} color={color} questionOption={questionOption} setScore={setScore} score={score} name={name} flag={flag} disabled={disabled} setDisabled={setDisabled} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default QuestionComponent;