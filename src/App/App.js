import React, { Component } from 'react';
import './App.css';
import { fetchReservation } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount() {
    this.getReservations();
  }

  getReservations() {
    fetchReservation()
      .then(reservations => {
        this.setState({ reservations });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { reservations } = this.state; 

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {reservations.map(reservation => (
            <div key={reservation.id} className="reservation">
              <p>Name: {reservation.name}</p>
              <p>Date: {reservation.date}</p>
              <p>Time: {reservation.time}</p>
              <p>Number of Guests: {reservation.number}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
