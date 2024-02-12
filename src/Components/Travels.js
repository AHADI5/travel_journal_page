import React from "react";
export default function Travels (pros) {
    return (
        <div className="place--visited">
            <div className="picture"> <img src={pros.picture} alt="pict"/></div>
            <div className="informations">
               <div className="info-content">
                    <div className="localisation">
                        <span className="location"><img src="/imgs/localisation.svg" alt="Localisation"/></span>
                        <span className="country">{pros.country}</span>
                        <span className="map--link"> <a href="www.google.com">view on google map</a></span>
                    </div>
                    <div className="place--name"><h1>{pros.placeName}</h1></div>
                    <div className="dates">{pros.period}</div>
                    <div className="description">{pros.description}</div>

               </div>
            </div>

        </div>
    )

}