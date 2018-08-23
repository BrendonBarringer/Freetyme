import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from '../../pages/images/logo.png';


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// <<<<<<< gary
// const Navbar = props => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/">
//       FREETYME!!!!!
//     </Link>
//     <div>
//       <ul className="navbar-nav">
//         <li
//           className={
//             window.location.pathname === "/" ||
//             window.location.pathname === "/login"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/" className="nav-link">
//             Login
//           </Link>
//         </li>
//         <li
//           className={            
//             window.location.pathname === "/calendar"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/calendar" className="nav-link">
//             Calendar
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/profile"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/profile" className="nav-link">
//             Profile
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/about"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/about" className="nav-link">
//             About
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/signup"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/signup" className="nav-link">
            
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );
// =======


class Navbar extends React.Component {  


  render (props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light topnav">
        <Link className="navbar-brand" to="/">
        <img src= {Logo} className="logo" />
        </Link>
        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
        aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i class="fa fa-bars fa-1x"></i></span>Menu</button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav mr-auto">
          { 
              this.props.loggedIn ? (
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
{/* // <<<<<<< Brendon */}
// =======
            <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Discover
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
{/* // >>>>>>> master */}
          </ul>
          <form className="form-inline"> 
            { this.props.loggedIn ? 
                ( <span className="navbar-text">Hello {this.props.username}</span>) : 
                ( <span className="navbar-text"></span> )
            }
          </form>
         
        </div>
      </nav>
    );
  }
}
// >>>>>>> master

export default Navbar;
