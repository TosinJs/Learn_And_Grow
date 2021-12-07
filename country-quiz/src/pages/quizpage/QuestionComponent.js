import { useEffect, useState } from "react";
import { genRandomIndex, getRandom } from "../../utils";
import ButtonComponent from "./ButtonComponent";

const QuestionComponent = ({ questionCountry, capitals, score, setScore }) => {
    const { name, capital } = questionCountry;
    const [capitalOptions, setCapitalOptions] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        let questionCapitals = getRandom(capitals, 4);
        const randomIndex = genRandomIndex(questionCapitals);
        questionCapitals.indexOf(capital) === -1 ? questionCapitals.splice(randomIndex, 1, capital) : console.log("");
        setCapitalOptions(questionCapitals)
    }, [])
    return (
        <div className="central question home">
            <h2>The Capital of {name.common} is ?</h2>
            <div>
                {
                capitalOptions.map((questionCapital, index) => {
                    return (
                        <ButtonComponent key={index} questionCapital={questionCapital} setScore={setScore} score={score} capital={capital} disabled={disabled} setDisabled={setDisabled} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default QuestionComponent;