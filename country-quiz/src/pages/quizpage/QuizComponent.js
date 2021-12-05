import { useEffect, useState } from "react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Link } from "react-router-dom";
import { fetchCountries, getRandom } from "../../utils";
import QuestionComponent from "./QuestionComponent";

// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; 

const QuizComponent = ({score, setScore}) => {
    const [countries, setCountries] = useState([]);
    const [questionCountries, setQuestionCountries] = useState([]);
    const [capitals, setCapitals] = useState([]);
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
    return (
        <div>
            <div>
            {
            questionCountries.map((questionCountry, index) => {
                return (
                <div key={index}>
                    <QuestionComponent questionCountry={questionCountry} capitals={capitals}  score={score} setScore={setScore} />
                </div>
                )
            })
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