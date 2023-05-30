import React, { Component } from 'react';
import './App.css';
import { fetchReservation } from '../apiCalls';
import Form from '../Form/Form';

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
      <Form />
        </div>
        <div className='resy-container'>
  


        </div>
      </div>
    );
  }
}

export default App;
