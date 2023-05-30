import React from "react";
import "../Card/Card.css"

const Card = ({key, name, date, time, guest}) => {
return(
  <>
  <h2>{name}</h2>
  <li>{date}</li>
  <li>{time} pm</li>
  <li>{date}</li>
  <li>Number of guests: {guest}</li>
  </>
)
}

export default Card