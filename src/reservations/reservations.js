import React from "react"
import "./reservations.css"

const 

{reservations.map(reservation => (
  <div key={reservation.id} className="reservation">
    <p>Name: {reservation.name}</p>
    <p>Date: {reservation.date}</p>
    <p>Time: {reservation.time}</p>
    <p>Number of Guests: {reservation.number}</p>