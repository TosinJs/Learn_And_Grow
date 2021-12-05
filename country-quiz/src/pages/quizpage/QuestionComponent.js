import { useEffect, useState } from "react";
import { genRandomIndex, getRandom } from "../../utils";

const QuestionComponent = ({ questionCountry, capitals, score, setScore }) => {
    const { name, capital } = questionCountry;
    const [capitalOptions, setCapitalOptions] = useState([])
    const [status, setStatus] = useState("nil")
    useEffect(() => {
        let questionCapitals = getRandom(capitals, 4);
        const randomIndex = genRandomIndex(questionCapitals);
        questionCapitals.indexOf(capital) === -1 ? questionCapitals.splice(randomIndex, 1, capital) : console.log("");
        setCapitalOptions(questionCapitals)
    }, [])

    const handleClick = (event) => {
        console.log(event.target.name)
        const selectedValue = event.target.name
        console.log(selectedValue, capital)
        if (selectedValue === capital[0]) {
            setScore(score + 1)
            setStatus("correct")
            return
        } else {
            setStatus("wrong")
            console.log("wrong")
            return
        }
    }
    return (
        <div>
            <h2>The Capital of {name.common} is ?</h2>
            <h3>{score}</h3>
            <div>
                {
                capitalOptions.map((questionCapital, index) => {
                    return (
                        <button onClick={(event) => handleClick(event)} key={index} name={questionCapital} disabled={status !== "nil" ? true : false}>{questionCapital}</button>
                    )
                })
                }
            </div>
        </div>
    )
}

export default QuestionComponent;