const CardComponent = ({ property }) => {
    const { country, photo, superHost, beds, type, rating } = property
    return (
        <div>
            <div>
                <img src={photo} alt={country} />
            </div>
            <div>
                {
                superHost ? <p>Super Host</p> : null
                }
                <p>{type}</p>
                {
                beds ? <p>{beds}</p> : null
                }
                <p>{rating}</p>
            </div>
        </div>
    )
}

export default CardComponent;