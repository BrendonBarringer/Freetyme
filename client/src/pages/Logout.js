//This is the logout page
import React, { Component } from "react";
import authUtil from "../utils/authUtil";
import Navbar from '../components/Navbar';
import Card from "../components/Card";

class Logout extends Component {

  // When the form is submitted, prevent the default event and alert the username and password
  handleLogout = event => {
    event.preventDefault();
    authUtil.logout(this.handleLogoutCB);
  };

  // Callback for login
  handleLogoutCB = (loggedIn, username) => {

    // Redirect to About page
    window.location.href = "/login";
  }

  render(props) {
    return (

      <div>
        <Navbar />
        <div className="list">
          <h2 id="title" class="animated hinge delay">Don't Leave Us Hangin'</h2>

        <Card image="https://i0.wp.com/www.heyuguys.com/images/2014/05/cliffhangerbdcap1_original.jpg?fit=1920%2C797&ssl=1" />
          
          <br></br>

          <h4 className="text-center">
            Are you sure you want to log out?
          <form className="text-center">
              <button className="btn btn-sm btn-primary" onClick={this.handleLogout}>Logout</button>
            </form>
          </h4>

        </div>
      </div>

    );
  }
}

export default Logout;
