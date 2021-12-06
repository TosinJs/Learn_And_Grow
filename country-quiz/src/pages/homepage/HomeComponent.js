import { Link } from "react-router-dom";

const HomeComponent = () => {
    return (
        <div className="central home">
            <h2>Welcome to the Country Quiz</h2>
            <div>
                <Link to="/quiz">
                    <button><span>Know Your Capitals?</span></button>
                </Link>
                <Link to="/quiz">
                    <button><span>Know Your Flags?</span></button>
                </Link>
                <Link to="/quiz">
                    <button><span>Know Them All?</span></button>
                </Link>
            </div>
        </div>
    )
}

export default HomeComponent;