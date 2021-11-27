const CardComponent = ({ property }) => {
    const { country, photo, superHost, beds, type, rating, title } = property
    return (
        <div className="card">
            <div className="card-image">
                <img src={photo} alt={country} />
            </div>
            <div className="card-content">
                {
                superHost ? <p className="card-pill">Super Host</p> : null
                }
                <p className="card-type">{type}</p>
                {/* {
                beds ? <p>.{beds} Beds</p> : null
                } */}
                <div className="rating flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#EB5757E5"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <p>{rating}</p>
                </div>
            </div>
            <div className="card-title">
                {title}
            </div>
        </div>
    )
}

export default CardComponent;