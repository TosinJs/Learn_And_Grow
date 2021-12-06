import { useEffect, useState } from "react"
import { fetchCountries, getRandom, genRandomIndex } from "../../utils"
import QuestionComponent from "../components/QuestionComponent"

const QuizPage = ({ countries, setScore, score }) => {
    let countryNames = []
    let capitalNames = []
    let flags = []
    let questionCountries = []
    const [state, setState] = useState([])

    if (countries.length) {
        countryNames = countries.map(country => country.name.common).filter(country => country !== undefined)
        capitalNames = countries.map(country => country.capital).filter(capital => capital !== undefined)
        flags = countries.map(country => country.flags.svg).filter(flag => flag !== undefined)
    }
    questionCountries = countries.length ? getRandom(countries, 10) : []
    setState(questionCountries)
    return (
        <div>
            {
            state.map((country, index) => {
                let capitalOptions = getRandom(capitalNames, 4)
                const val = genRandomIndex(capitalOptions)
                capitalOptions.indexOf(country.capital) === -1 ? capitalOptions.splice(val, 1, country.capital) : console.log("")
                console.log(country.capital, capitalOptions)
                return (
                    <QuestionComponent key={index} capitalOptions={capitalOptions} country={country} setScore={setScore} score={score} />
                )

            })
            }
        </div>
    )
}

export default QuizPage;