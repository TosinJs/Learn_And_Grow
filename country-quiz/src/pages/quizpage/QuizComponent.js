import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { fetchCountries, getRandom } from "../../utils";
import QuestionComponent from "./QuestionComponent";
import LoaderComponent from "./LoaderComponent";

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/effect-coverflow/effect-coverflow.scss';

SwiperCore.use([EffectCoverflow,Pagination,Navigation]);

const QuizComponent = ({score, setScore}) => {
    const [loading, setLoading] = useState(true);
    const [questionCountries, setQuestionCountries] = useState([]);
    const [options, setOptions] = useState([]);
    const [end, setEnd] = useState(false);
    const location = useLocation();
    const { quizType } = location.state;
    useEffect(() => {
        const getCountries = async () => {
            let countries = await fetchCountries();
            const options = countries.map(country => country.name.common).filter(country => country !== undefined);
            countries = countries.filter(country => country.name.common !== undefined && country.capital !== undefined && country.flags.png !== undefined);
            const questionCountries = getRandom(countries, 10);
            setOptions(options);
            setQuestionCountries(questionCountries);
            setLoading(false);
        }
        getCountries()
    }, [])
    if (loading) {
        return <LoaderComponent />
    }
    console.log(end)
    return (
        <div className="quiz-holder">
            <div className="quiz">  
            <Swiper effect={'coverflow'} centeredSlides={false} slidesPerView={'auto'} coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": false
            }} pagination={true} navigation={true} className="mySwiper" onReachEnd={() => setEnd(true)}>
            {
            questionCountries.map((questionCountry, index) => {
                console.log(questionCountry)
                return (
                    <SwiperSlide>
                        <div key={index}>
                            <QuestionComponent questionCountry={questionCountry} options={options} score={score} setScore={setScore} quizType={quizType}/>
                        </div>
                    </SwiperSlide>
                )
            })
            }
            </Swiper>
            </div>
            <div className="submit-holder">
            <Link to="/result">
                <button className={end ? "submit live shake-vertical" : "submit dead"} disabled={end ? false : true}>
                        Submit
                </button>
            </Link>
            </div>
        </div>
    )
}

export default QuizComponent;