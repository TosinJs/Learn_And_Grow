import { useState } from "react";
import properties from "../stays.json";

const FilterComponent = ({ filter, setFilter, setIsModal }) => {
    const cities = [...new Set(properties.map(property => property.city))]
    const { locationFilter, guestsFilter } = filter
    const [value, setValue] = useState({
        children: 0,
        adults: 0
    })
    const [currentFilter, setCurrentFilter] = useState("")
    const handleLocation = (location) => {
        setFilter({...filter, locationFilter: location})
    }
    const handleValIncrease = (status) => {
        switch (status) {
            case "child":
                setFilter({...filter, guestsFilter: guestsFilter + 1})
                setValue({...value, children: value.children + 1})
                break;
            case "adult":
                setFilter({...filter, guestsFilter: guestsFilter + 1})
                setValue({...value, adults: value.adults + 1})
                break;
            default:
                break;
        }
    }
    const handleValDecrease = (status) => {
        switch (status) {
            case "child":
                setFilter({...filter, ...(guestsFilter && {guestsFilter: guestsFilter - 1})})
                setValue({...value, ...(value.children && {children: value.children - 1})})
                break;
            case "adult":
                setFilter({...filter, ...(guestsFilter && {guestsFilter: guestsFilter - 1})})
                setValue({...value, ...(value.adults && {adults: value.adults - 1})})
                break;
            default:
                break;
        }
    }
    const handleCurrentFilter = (value) => {
        switch (value) {
            case "location":
                setCurrentFilter("location")
                break;
            case "guests":
                setCurrentFilter("guests")
                break;
            default:
                break;
        }
    }
    return (
        <div className="filter">
            <div className="flex filter-header">
                <p>Edit your Search</p>
                <button className="" onClick={() => setIsModal(false)}>X</button>
            </div>
            <div>
                <div className="filter-button" >
                <button onClick={() => handleCurrentFilter("location")}>
                    <h3>Location</h3>
                    <p>{locationFilter ? `${locationFilter}, Finland` : "Add Location"}</p>
                </button>
                <button onClick={() => handleCurrentFilter("guests")}>
                    <h3>Guests</h3>
                    <p>{guestsFilter ? `${guestsFilter} guest${guestsFilter > 1 ? "s" : ""}` : "Add Guests"}</p>
                </button>
                </div>
                <ul className="filter-content">
                {
                currentFilter === "location" ? 
                    (
                    cities.map(city => <li onClick={() => handleLocation(city)} value={`${city}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        {`${city}, Finland`}
                        </li>)
                    )
                    :
                    null
                }
                </ul>
                <div className="filter-content">
                {
                currentFilter === "guests" ?
                    (
                    <>
                    <div>
                    <h4>Adults</h4>
                    <p className="base-font">Ages 13 and Above</p>
                    <div className="flex more-content">
                        <button onClick={() => handleValDecrease("adult")}>-</button>  
                        <p>{value.adults}</p>
                        <button onClick={() => handleValIncrease("adult")}>+</button>
                    </div> 
                </div>

                <div>
                    <h4>Children</h4>
                    <p className="base-font">Ages 12 and Below</p>
                    <div className="flex more-content">
                        <button onClick={() => handleValDecrease("child")}>-</button>  
                        <p>{value.children}</p>
                        <button onClick={() => handleValIncrease("child")}>+</button>
                    </div>
                </div>
                </>
                ) 
                :
                null
                }
                </div>
            </div>
            <div onClick={() => setIsModal(false)} className="submit-btn button">
                <button>Submit</button>
            </div>
        </div>
    )
}

export default FilterComponent;