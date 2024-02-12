import React from "react";
export default function Travels (pros) {
    return (
        <div className="place--visited">
            <div className="picture"> <img src={pros.picture} alt="pict"/></div>
            <div className="informations">
                <div className="localisation">
                    <span className="location"></span>
                    <span className="country">{pros.country}</span>
                    <span className="map--link"> <a href="www.google.com">view on google map</a></span>
                </div>
                <div className="place--name"><h2>{pros.placeName}</h2></div>
                <div className="dates">{pros.period}</div>
                <div className="description">{pros.description}</div>
            </div>

        </div>
    )

}