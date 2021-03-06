//This is the login page from 20 react 01 .. We don't need to use it .. 
import React, { Component } from "react";
import './login.css';
import Logo from './images/logo2.png';
import authUtil from "../utils/authUtil";

class Login extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username : "",
    password : ""
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
    // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    authUtil.login(this.state.username, this.state.password, this.handleLoginCB);
    this.setState({ username: "", password: "" });
  };

  // Callback for login
  handleLoginCB = (loggedIn, username) => {
    // Don't setState here. We want it to stay cleared.

    // If successful login. Redirect to About page
    if (loggedIn) {
      window.location.href = "/calendar"
    } else {
      alert("Invalid Email or Password. Please Try Again");
    }
  }

  render(props) {
    return (
      <div>
      <div id="logo">                
      <img src= {Logo} alt='logo' />
      <p>When you have the time...We help you climb</p>
      </div>
      
      <form id="form">        
        <h1>Login</h1>
        <input
          className = "formInput"
          type="text"
          placeholder="  Email"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          className = "formInput"
          type="password"
          placeholder="  Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        /><br />
        <button onClick={this.handleFormSubmit}>Submit</button>
        <p>New to freetyme? <a href="/signup"> Create an account</a></p>
      </form>
      </div>
    );
  }
}

export default Login;
