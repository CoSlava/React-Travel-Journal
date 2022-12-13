import React from "react"

export default function Body(props){
    return(
        <div className="body-container">
            <div>
                <img src={props.imageUrl}/>
            </div>
            <div className="body-text-content">
                <div className="body-location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="body-location-txt">{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p><b>{props.startDate} - {props.endDate}</b></p>
                <p className="body-description">{props.description}</p>
            </div>
        </div>
    )
}