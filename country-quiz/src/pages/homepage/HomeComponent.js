import { Link } from "react-router-dom";

const HomeComponent = () => {
    return (
        <div className="central home">
            <h2>Welcome to the Country Quiz</h2>
            <div>
                <Link to="/quiz" state={{quizType: "capitals"}}>
                    <button><span>Know Your Capitals?</span></button>
                </Link>
                <Link to="/quiz" state={{quizType: "flags"}}>
                    <button><span>Know Your Flags?</span></button>
                </Link>
            </div>
        </div>
    )
}

export default HomeComponent;