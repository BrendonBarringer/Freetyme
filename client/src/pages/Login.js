//This is the login page from 20 react 01 .. We don't need to use it .. 
import React, { Component } from "react";
import authUtil from "../utils/authUtil";

class Login extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username : "",
    password : ""
  };
  loginCB = null;

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
    this.loginCB(loggedIn, username);

    // If successful login. Redirect to About page
    if (loggedIn)
      window.location.href = "/about";
  }

  render(props) {
    this.loginCB = this.props.loginCB;
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Login;
