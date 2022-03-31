import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      email:'',
      password:'',
      address:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { name, gender,email, password,address} = this.state;
    await axios.post(
      'https://idc1apq7j8.execute-api.us-east-2.amazonaws.com/items',
      { id:2,name: name, gender:gender,email:email,password:password,address:address }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>gender:</label>
          <input
            type="text"
            name="gender"
            onChange={this.handleChange}
            value={this.state.gender}
          />
          <label>email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label>password:</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <label>address:</label>
          <input
            type="text"
            name="address"
            onChange={this.handleChange}
            value={this.state.address}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}