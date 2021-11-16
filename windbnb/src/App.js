import { useState } from "react";
import CardComponent from "./components/cardComponent";
import FilterComponent from "./components/filterComponent";
import HeaderComponent from "./components/headerComponent";
import properties from "./stays.json";

function App() {
  const [filter, setFilter] = useState({
    locationFIlter: null,
    guestsFilter: 0
  })
  const { locationFilter, guestsFilter } = filter
  let filteredProperties = properties.map(property => {
    if (locationFilter && guestsFilter) {
      if (property.city === locationFilter && property.maxGuests === guestsFilter) {
        return property
      } else return null
    } else if (locationFilter) {
      if (property.city === locationFilter) {
        return property
      } else return null
    } else if (guestsFilter) {
      if (property.maxGuests === guestsFilter) {
        return property
      } else return null
    } else return property
  })
  filteredProperties = filteredProperties.filter(Boolean)
  console.log(filteredProperties)
  return (
    <div>

      <div className="header">
        <HeaderComponent />
        <div className="nav-button">
          <button>
            {
            locationFilter ? <p>{locationFilter}</p> : <p>Add Location</p>
            }
          </button>
          <button>
            {
            guestsFilter ? <p>{guestsFilter}</p> : <p>Add Guests</p>
            }
          </button>
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#EB5757E5"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </button>
        </div>
      </div>
      
      <div className="modal">
        <FilterComponent filter={filter} setFilter={setFilter} />
      </div>

      <div>
      {
        filteredProperties.map(property => {
          return (
            <CardComponent property={property} />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
