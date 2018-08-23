//This is the logout page
import React, { Component } from "react";
import authUtil from "../utils/authUtil";

class Logout extends Component {
  loginCB = null;
  
  // When the form is submitted, prevent the default event and alert the username and password
  handleLogout = event => {
    event.preventDefault();
    authUtil.logout(this.handleLogoutCB);
  };

  // Callback for login
  handleLogoutCB = (loggedIn, username) => {
    this.loginCB(loggedIn, username);

    // Redirect to About page
    window.location.href = "/about";
  }

  render(props) {
    this.loginCB = this.props.loginCB;
    return (
      <form>
        <button className="btn btn-sm btn-primary" onClick={this.handleLogout}>Logout</button>
      </form>
    );
  }
}

export default Logout;
