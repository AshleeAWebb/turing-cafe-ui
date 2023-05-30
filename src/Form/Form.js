import React, { Component } from "react";
import "../Form/Form.css"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"",
      date: "",
      time: "",
      guest: ""
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, date, time, guest } = this.state;
    const reservationData = {
      name,
      date,
      time,
      number: guest
    };
    this.props.postReservation(reservationData)
      .then(newReservation => {
        console.log("New reservation:", newReservation);
        this.props.fetchReservations(); 
      })
      .catch(error => {
        console.log("Error creating reservation:", error);
      });
  };
  
  render() {
    const { name, date, time, guest } = this.state;
  
    return (
      <form className="form" onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={this.handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="date"
        value={date}
        onChange={this.handleChange}
        placeholder="Date (mm/dd)"
      />
      <input
        type="text"
        name="time"
        value={time}
        onChange={this.handleChange}
        placeholder="Time"
      />
      <input
        type="number"
        name="guest"
        value={guest}
        onChange={this.handleChange}
        placeholder="Number of guests"
      />
      <button className="formButton" type="submit">Make Reservation</button>
    </form>
    );
  }
}
export default Form;