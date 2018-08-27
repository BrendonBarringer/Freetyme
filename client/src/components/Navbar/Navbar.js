import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from '../../pages/images/logo.png';
import authUtil from '../../utils/authUtil';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

class Navbar extends React.Component {
  state = { 
    loggedInId: 0,
    fullname: ""
  }

  componentDidMount() {
    // This will check for logged in and trigger loggedInId notify callbacks
    // (If we don't do this, we won't know current state when component is mounted)
    authUtil.registerLoginNotify((loggedInId, username, fullname) => this.loginCallback(loggedInId, username, fullname) );
  }

  componentWillUnmount() {
    authUtil.unregisterLoginNotify((loggedInId, username, fullname) => this.loginCallback(loggedInId, username, fullname) );   
  }

  loginCallback(loggedInId, username, fullname) {
    this.setState({loggedInId, username, fullname});
  }

  render(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light topnav">
        <Link className="navbar-brand" to="/">
          <img src={Logo} className="logo" alt='logo'/>
        </Link>
        <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
          aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fa fa-bars fa-1x"></i></span>Menu</button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav mr-auto">
            {
              this.state.loggedInId > 0 ? (
                // Logout Page
                <li
                  className={
                    window.location.pathname === "/" ||
                      window.location.pathname === "/login"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to="/logout" className="nav-link">
                    Logout
                  </Link>
                </li>
              ) : (
                  // Login Page
                  <li
                    className={
                      window.location.pathname === "/" ||
                        window.location.pathname === "/logout"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link to="/login" className="nav-link">
                      Login
                  </Link>
                  </li>
                )
            }
            <li
              className={
                window.location.pathname === "/calendar"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/calendar" className="nav-link">
                Calendar
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/profile"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/about"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            {/* <li
              className={
                window.location.pathname === "/discover"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/discover" className="nav-link">
                Discover
              </Link>
            </li> */}

            <li
              className={
                window.location.pathname === "/freetime"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/freetime" className="nav-link">
                Freetime List
              </Link>
            </li>

            <li
              className={
                window.location.pathname === "/meeting"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/meeting" className="nav-link">
                Meeting List
              </Link>
            </li>


            <li
              className={
                // window.location.pathname === "/about"
                window.location.pathname === "/signup"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/signup" className="nav-link">

              </Link>
            </li>

          </ul>
          <form className="form-inline">
            {this.state.loggedInId > 0 ?
              (<span className="navbar-text">Hello, {this.state.fullname}</span>) :
              (<span className="navbar-text"></span>)
            }
          </form>

        </div>
      </nav>
    );
  }
}

export default Navbar;
