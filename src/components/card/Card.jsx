import React from "react";
import "./card.css"
import star from '../../images/star.png'

export const Card = ({
    picture, 
    rating, 
    reviewCount, 
    location, 
    country,
    title, 
    price,
    openSpots,
}) => {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../../images/${picture}`} alt="card-pic" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="card--star" className="card--star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}