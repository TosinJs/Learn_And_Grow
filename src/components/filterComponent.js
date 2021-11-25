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
                    <p>{locationFilter ? locationFilter : "Add Location"}</p>
                </button>
                <button onClick={() => handleCurrentFilter("guests")}>
                    <h3>Guests</h3>
                    <p>{guestsFilter ? guestsFilter : "Add Guests"}</p>
                </button>
                </div>
                <ul className="filter-content">
                {
                currentFilter === "location" ? 
                    (
                    cities.map(city => <li onClick={() => handleLocation(city)} value={`${city}`}>{`${city}, Finland`}</li>)
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