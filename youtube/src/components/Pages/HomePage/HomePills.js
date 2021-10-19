import React from "react";
import { useRef, useState } from "react";
import rightArrow from "../../../assets/chevron_right_black_24dp.svg";
import leftArrow from "../../../assets/chevron_left_black_24dp.svg";

const HomePills = () => {
    const pillCategories = ["NollyWood Comedies Comedies", "HollyWood", "Comedies", "Music", "Wrestling", "Comedies", "Comedies", "Comedies", "Comedies", "Comedies", "Comedies", "Comedies"]
    const pillRef = useRef()
    const [screenProperties, setScreenProperties] = useState({
        scrollLeft: 0,
        scrollWidth: 0,
        outerWidth: 200,
    })

    const handleClick = (direction) => {
        if (pillRef) {
            direction === "left" ? pillRef.current.scrollLeft -= 200 
            : 
            pillRef.current.scrollLeft += 200   
        } else return
        console.log(pillRef.current.scrollLeft)
        console.log(pillRef.current.scrollWidth)
        console.log(pillRef.current.clientWidth)
        console.log(pillRef.current.scrollWidth === pillRef.current.scrollLeft + pillRef.current.clientWidth)
        setScreenProperties({
            scrollLeft: pillRef.current.scrollLeft,
            scrollWidth: pillRef.current.scrollWidth,
            outerWidth: pillRef.current.clientWidth,
        })
    }
    const {scrollLeft, scrollWidth, outerWidth} = screenProperties;
    return (
        <div className="relative overflow-hidden">
        <div className="flex gap-4 h-14 p-3 overflow-auto whitespace-nowrap hidden-scrollbar items-center bg-white bg-opacity-95" ref={pillRef}>
            {
            scrollLeft === 0 ? null
            : 
            <div className="w-28 absolute left-0 bg-gradient-to-r from-white via-white flex justify-start">
            <button onClick={() => handleClick("left")} className="nav-btn mr-4">
                <img src={leftArrow} alt="view more pills" />
            </button>
            </div>
            }

            {
            pillCategories.map((pillCategory, index) => {
                return (
                    <button className="pill" key={index}>
                        {pillCategory}
                    </button>
                )
            })
            }
            {
            (scrollWidth) === (scrollLeft + outerWidth) ? null
            :
            <div className="w-28 absolute right-0 bg-gradient-to-r from-transparent via-white to-white flex justify-end">
                <button onClick={() => handleClick("right")} className="nav-btn mr-4">
                    <img src={rightArrow} alt="view more pills" />
                </button>
            </div>
            }
        </div>
        </div>
    )
}

export default HomePills;