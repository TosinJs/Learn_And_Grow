const ResultComponent = ({ score }) => {
    return (
        <div>
            <h2>
                {score < 7 ? "Lol,": "Congratulations"}
                You Got {score} out of 10 Questions Right
            </h2>
            <div>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default ResultComponent;