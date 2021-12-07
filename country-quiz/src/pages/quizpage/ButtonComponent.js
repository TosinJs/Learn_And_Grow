import { useState } from "react"
const ButtonComponent = ({ questionCapital, setScore, score, capital, disabled, setDisabled }) => {
    const [status, setStatus] = useState("nil")

    const handleClick = (event) => {
        console.log(event.target.name)
        const selectedValue = event.target.name
        console.log(selectedValue, capital)
        setDisabled(true)
        if (selectedValue === capital[0]) {
            setScore(score + 1)
            setStatus("correct")
            return
        } else {
            setStatus("wrong")
            console.log("wrong")
            return
        }
    }
    return (
        <button className={status === "correct" ? "btn-green" : status === "wrong" ? "btn-red" : null} onClick={(event) => handleClick(event)} name={questionCapital} disabled={disabled}>
            {questionCapital}
        </button>
    )
}

export default ButtonComponent;