import React, { Component } from 'react';
import './App.css';
import { fetchReservation } from '../apiCalls';
import Form from '../Form/Form';
import Reservation from '../Reservation/Reservation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
    this.getReservations = this.getReservations.bind(this);
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

  postReservation = (reservationData) => {
    return fetch("http://localhost:3001/api/v1/reservations", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Reservation:', data);
      return data; 
    })
    .catch(error => {
      console.log(error.status);
      throw new Error("Error creating reservation");
    });
  };

  render() {
    const { reservations } = this.state; 

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form postReservation={this.postReservation} fetchReservations={this.getReservations} />
        </div>
        <div className='resy-container'>
          <Reservation reservations={reservations} />
        </div>
      </div>
    );
  }
}

export default App;