import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import FreetimeList from "./pages/FreetimeList";
import MeetingList from "./pages/MeetingList";
import Signup from './pages/Signup';
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Calendar from "./pages/Calendar";
// import './components/calendar/less/input-moment.less';

class App extends React.Component {
  
  render(props) {
    return (
      <Router>
        <div>
          
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/profile" component={Profile} />

            <Route exact path="/signup" component={Signup} />

            <Route exact path="/discover" component={Discover} />
            <Route exact path="/freetime" component={FreetimeList} />
            <Route exact path="/meeting"  component={MeetingList} />

          </Wrapper>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;