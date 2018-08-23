import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from './pages/Signup';
// import Navbar from "./components/Navbar";
//  import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Calendar from "./pages/Calendar";
import './components/calendar/less/input-moment.less';
import authUtil from "./utils/authUtil";

class App extends React.Component {
  state = {
    loggedIn: false,
    username: "",
  }

  constructor () {
    super();
    authUtil.isLoggedIn((loggedIn, username) => this.loginCB(loggedIn, username));
  }
  
  loginCB(loggedIn, username) {
    this.setState({loggedIn, username});
  }

  render(props) {
    return (
      <Router>
        <div>
          <Navbar loggedIn={this.state.loggedIn} username={this.state.username} />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/about" component={About} />
            <Route exact path='/login' render={(props) => <Login {...props} 
                   loginCB={(loggedIn, username) => this.loginCB(loggedIn, username)} />}/>
            <Route exact path='/logout' render={(props) => <Logout {...props} 
                   loginCB={(loggedIn, username) => this.loginCB(loggedIn, username)} />}/>
            <Route exact path="/profile" component={Profile} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;