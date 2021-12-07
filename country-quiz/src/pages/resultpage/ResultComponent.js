import { Link } from "react-router-dom";
const ResultComponent = ({ score }) => {
    return (
        <div className={"central home result"}>
            <h2>
                {score < 7 ? "Lol,": "Congratulations"}
                You Got {score} out of 10 Questions Right
            </h2>
            <div>
                <Link to="/">
                    <button>
                        Reset
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ResultComponent;