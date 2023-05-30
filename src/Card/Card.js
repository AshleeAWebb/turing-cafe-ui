import React from "react";
import "../Card/Card.css"

const Card = ({key, name, date, time, guest}) => {
return(
  <div className="card">
  <h2>{name}</h2>
  <ul>
  <li>{date}</li>
  <li>{time} pm</li>
  <li>{date}</li>
  <li>Number of guests: {guest}</li>
  </ul>
  <button>Cancel</button>
  </div>
)
}

export default Card