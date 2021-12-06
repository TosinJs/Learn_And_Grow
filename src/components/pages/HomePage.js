import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h2>Welcome to the Country Quiz, Please Select a Category</h2>
            <div>
                <Link to="/quiz">
                    <button>Know Your Capitals?</button>
                </Link>
                <button>Know Your Flags?</button>
                <button>Know Them All?</button>
            </div>
        </div>
    )
}

export default HomePage;