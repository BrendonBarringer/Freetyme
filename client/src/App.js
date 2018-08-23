import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";
// import Navbar from "./components/Navbar";
//  import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Calendar from "./pages/Calendar";
import './components/calendar/less/input-moment.less';
import Signup from './pages/Signup';

const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Wrapper>
        <Route exact path="/" component={Login} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={Signup} />        
      </Wrapper>
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;