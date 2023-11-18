import React from "react";
import Destination from "../img/destination.png";

function Card({ key, item }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={item.img} />
      </div>

      <div className="content">
        <div className="dest-details">
          <div className="dest-img-container">
            <img src={Destination} alt="dest-icon" />
          </div>
          <h3 className="dest-country">{item.country}</h3>
          <a href="#" className="nav-link">View on Google Maps</a>
        </div>

        <h2 className="destiny">{item.destiny}</h2>
        <div className="duration">{item.duration.startDate} - {item.duration.endDate}</div>
        <p className="desc">{item.desc}</p>
      </div>
    </div>
  )
}

export default Card;