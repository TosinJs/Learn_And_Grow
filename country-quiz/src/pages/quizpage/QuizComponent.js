import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { fetchCountries, getRandom } from "../../utils";
import QuestionComponent from "./QuestionComponent";
import LoaderComponent from "./LoaderComponent";

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';
import 'swiper/modules/effect-coverflow/effect-coverflow.scss';

SwiperCore.use([EffectCoverflow,Pagination,Navigation]);

const QuizComponent = ({score, setScore}) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
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
            setLoading(false)
        }
        getCountries()
    }, [])
    if (loading) {
        return <LoaderComponent />
    }
    return (
        <div className="quiz-holder">
            <div className="quiz">  
            <Swiper effect={'coverflow'} centeredSlides={false} slidesPerView={'auto'} coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": false
            }} pagination={true} navigation={true} className="mySwiper">
            {
            questionCountries.map((questionCountry, index) => {
                return (
                    <SwiperSlide>
                        <div key={index}>
                            <QuestionComponent questionCountry={questionCountry} capitals={capitals}  score={score} setScore={setScore} />
                        </div>
                    </SwiperSlide>
                )
            })
            }
            </Swiper>
            </div>
            <div className="submit-holder">
                <button className="submit">
                    <Link to="/result">
                        Submit
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default QuizComponent;