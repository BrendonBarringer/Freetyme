//This is the login page from 20 react 01 .. We don't need to use it .. 
import React, { Component } from "react";
import './login.css';
import Logo from './images/logo.png';

class Signup extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div>
      <div id="logo">                
      <img src= {Logo} />
      <p>Insert catchpharase here.</p>
      </div>
      
      <form id="form">        
        <h1>Login</h1>
        <input
          type="text"
          placeholder="  username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="  Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder=" Confirm Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        
        <br />
        <button onClick={this.handleFormSubmit}>Create Account</button>
        
      </form>
      </div>
    );
  }
}

export default Signup;
