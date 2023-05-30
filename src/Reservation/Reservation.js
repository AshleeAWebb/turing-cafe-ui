import React from "react";
import Card from "../Card/Card";
import "./Reservation.css";

const Reservation = ({ reservations }) => {
  return (
    <div className="reservations">
      {reservations.map(reservation => (
        <Card
          key={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          guest={reservation.number}
        />
      ))}
    </div>
  );
};


export default Reservation;

