import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import Calendar from './components/calendar/calendar.js';
 import InputMoment from '../components/calendar/input-moment';
 import moment from 'moment';
//  import packageJson from '../package.json';
//  import '../components/calendar/css'; 
//  import '../components/calendar/less/app.less';
 import API from "../utils/API";
 import Navbar from '../components/Navbar';

class Calendar extends Component {
  state = {
    m: moment(),
    time1:"",
    time2:""
  };
 content ={
  startTime: this.time1,
  endTime: this.time2
 }
  handleChange = m => {
    this.setState({ m });
  };

  handleSave = () => {
    console.log('saved', this.state.m.format('llll'));
    if(this.state.time1 === ""){
      this.setState({time1: this.state.m.format('llll')});
      this.forceUpdate()
    }
  
  else{
    this.setState({time2: this.state.m.format('llll')});
    this.forceUpdate()
  }
  
};
resetStart = () => {
  console.log('reset');
    this.setState({time1: ""});
    this.forceUpdate()
}
resetEnd = () => {
  console.log('reset');
    this.setState({time2: ""});
    this.forceUpdate()

};
click2 = () =>{
    API.addFreetime(this.state.time1, this.state.time2);
    console.log(this.state.time1, this.state.time2)
  }
  render() {
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} username={this.state.username} />
      <div className="app">      
      <h6>When are you free?</h6>
      <p>Select a start and end date/time</p>
      <form>
        <div className="input">
          <input type="text" value={this.state.m.format('llll')} readOnly />
        </div>
        <InputMoment
          moment={this.state.m}
          onChange={this.handleChange}
          minStep={15}
          onSave={this.handleSave}
        />
      </form>
      <br></br><div>
         <button onClick={this.resetStart}>Reset Start Time</button> <br></br><input placeholder="Start Time" type="text" value={this.state.time1}/><br></br>
         <button onClick={this.resetEnd}>Reset End Time </button><br></br> <input placeholder="End Time" type="text" value={this.state.time2}/><br></br>
        <button onClick={this.click2}>Save Your FreeTyme</button>
        </div>
    </div>
    </div>
       
    );
  }
}

export default Calendar;
