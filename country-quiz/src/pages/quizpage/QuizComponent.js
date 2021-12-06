import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchCountries, getRandom } from "../../utils";
import QuestionComponent from "./QuestionComponent";

const QuizComponent = ({score, setScore}) => {
    const [countries, setCountries] = useState([]);
    const [questionCountries, setQuestionCountries] = useState([]);
    const [capitals, setCapitals] = useState([]);
    const [screenProperties, setScreenProperties] = useState({
        scrollLeft: 0,
        scrollWidth: 0,
        outerWidth: 200,
    })
    const pillRef = useRef()
    useEffect(() => {
        const getCountries = async () => {
            const countries = await fetchCountries();
            const capitals = countries.map(country => country.capital).filter(capital => capital !== undefined);
            const questionCountries = getRandom(countries, 10)
            setCapitals(capitals);
            setCountries(countries);
            setQuestionCountries(questionCountries);
        }
        getCountries()
    }, [])
    const handleClick = (direction) => {
        if (pillRef) {
            direction === "left" ? pillRef.current.scrollLeft -= 200 
            : 
            pillRef.current.scrollLeft += 200   
        } else return
        console.log(pillRef.current.scrollLeft)
        console.log(pillRef.current.scrollWidth)
        console.log(pillRef.current.clientWidth)
        console.log(pillRef.current.scrollWidth === pillRef.current.scrollLeft + pillRef.current.clientWidth)
        setScreenProperties({
            scrollLeft: pillRef.current.scrollLeft,
            scrollWidth: pillRef.current.scrollWidth,
            outerWidth: pillRef.current.clientWidth,
        })
    }
    const {scrollLeft, scrollWidth, outerWidth} = screenProperties;
    return (
        <div>
            <div className="quiz">
            {
            scrollLeft === 0 ? null
            : 
            <div>
            <button onClick={() => handleClick("left")}>
                +
            </button>
            </div>
            }   
            {
            questionCountries.map((questionCountry, index) => {
                return (
                <div key={index}>
                    <QuestionComponent questionCountry={questionCountry} capitals={capitals}  score={score} setScore={setScore} />
                </div>
                )
            })
            }
            {
            (scrollWidth) === (scrollLeft + outerWidth) ? null
            :
            <div>
                <button onClick={() => handleClick("right")}>
                    -
                </button>
            </div>
            }
            </div>
            <div>
                <Link to="/result">
                    <button>Submit</button>
                </Link>
            </div>
        </div>
    )
}

export default QuizComponent;