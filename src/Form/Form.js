import React, { Component } from "react";
import "../Form/Form.css"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name:"",
      date: "",
      time: "",
      guest: 0
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  render() {
    const { name, date, time, guest } = this.state;
  
    return (
      <form className="form">
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