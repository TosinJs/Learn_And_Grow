import { useState } from "react";
function LightenDarkenColor(col,amt) {
    var usePound = false;
    if ( col[0] === "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}
const Button = ({ button }) => {
    const {variant, disabled, size, color, fontColor} = button
    const [backgroundColor, setBackgroundColor] = useState(null)
    const [colorVal, setColorVal] = useState(null)
    const style = {
        backgroundColor: `${(variant === "outline") || (variant === "text")  ? "white" : `${color}`}`,
        color: `${(fontColor || disabled === true) ? fontColor : "white"}`,
        border: `${variant === "outline" ? `1px solid ${fontColor}` : null}`,
        width: `${size === "lg" ? "110px" : size === "sm" ? "60px" : "80px"}`,
        height: `${size === "lg" ? "55px" : size === "sm" ? "30px" : "40px"}`,
        ...(backgroundColor && {backgroundColor: backgroundColor}),
        ...(colorVal && {color: colorVal}),
    }
    const handleMouseOver = () => {
        if (color || fontColor) {
            const newColor = LightenDarkenColor(color, -80)
            setBackgroundColor(newColor)
            setColorVal("white")
            console.log(color)
            console.log(newColor) 
        } else {
            console.log("nocolor", color)
            return 
        }

    }
    const handleMouseOut = () => {
        setBackgroundColor(`${(variant === "outline") || (variant === "text")  ? "white" : `${color}`}`)
        setColorVal(`${(fontColor || disabled === true) ? fontColor : "white"}`)
    }
    return (
        <button style={style} className="button" disabled={disabled} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            Default
        </button>
    )
}

export default Button;