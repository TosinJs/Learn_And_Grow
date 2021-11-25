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
                <p>{rating}</p>
            </div>
            <div className="card-title">
                {title}
            </div>
        </div>
    )
}

export default CardComponent;