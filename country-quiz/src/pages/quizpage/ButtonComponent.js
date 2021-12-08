import { useState } from "react"
const ButtonComponent = ({ questionOption, color, setScore, score, name, disabled, setDisabled }) => {
    const [status, setStatus] = useState("nil")

    const handleClick = (event) => {
        console.log(event.target.name)
        const selectedValue = event.target.name
        setDisabled(true)
        if (selectedValue === name.common) {
            setScore(score + 1)
            setStatus("correct")
            return
        } else {
            setStatus("wrong")
            return
        }
    }
    return (
        <button style={{background: status === "wrong" ? "#fa5757" : color}} className={status === "correct" ? "btn-green" : status === "wrong" && color === "white" ? `btn-red ${color}` : null} onClick={(event) => handleClick(event)} name={questionOption} disabled={disabled}>
            {questionOption}
        </button>
    )
}

export default ButtonComponent;