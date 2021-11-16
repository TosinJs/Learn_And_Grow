import { useState } from "react";
import properties from "../stays.json";

const FilterComponent = ({ filter, setFilter }) => {
    const cities = [...new Set(properties.map(property => property.city))]
    const { locationFilter, guestsFilter } = filter
    const [value, setValue] = useState({
        children: 0,
        adults: 0
    })
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
    return (
        <div className="filter">
            <div>
                <button>
                    <p>Location</p>
                    <p>{locationFilter ? locationFilter : "Add Location"}</p>
                </button>
                <ul>
                    {
                    cities.map(city => <li onClick={() => handleLocation(city)} value={`${city}`}>{`${city}, Finland`}</li>)
                    }
                </ul>
            </div>

            <div>
                <button>
                    <p>Guests</p>
                    <p>{guestsFilter ? guestsFilter : "Add Guests"}</p>
                </button>
                <div>
                    <div>
                        <h4>Adults</h4>
                        <p>Ages 13 and Above</p>
                        <div>
                            <button onClick={() => handleValDecrease("adult")}>-</button>  
                            <p>{value.adults}</p>
                            <button onClick={() => handleValIncrease("adult")}>+</button>
                        </div> 
                    </div>

                    <div>
                        <h4>Children</h4>
                        <p>Ages 12 and Below</p>
                        <div>
                            <button onClick={() => handleValDecrease("child")}>-</button>  
                            <p>{value.children}</p>
                            <button onClick={() => handleValIncrease("child")}>+</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterComponent;