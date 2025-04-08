import marker from '../assets/marker.png'

export default function Entry(props){
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.place.img.src}
                    alt={props.place.img.alt}
                />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src={marker}
                    alt="map marker icon"
                />
                <span className="country">{props.place.country}</span>
                <a href={props.place.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.place.title}</h2>
                <p className="trip-dates">{props.place.dates}</p>
                <p className="entry-text">{props.place.text}</p>
            </div>

        </article>
    )
}