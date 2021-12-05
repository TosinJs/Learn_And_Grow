import { Link } from "react-router-dom";

const HomeComponent = () => {
    return (
        <div>
            <h2>Welcome to the Country Quiz</h2>
            <div>
                <Link to="/quiz">
                    <button>Know Your Capitals?</button>
                </Link>
                <Link to="/quiz">
                    <button>Know Your Flags?</button>
                </Link>
                <Link to="/quiz">
                    <button>Know Them All?</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeComponent;