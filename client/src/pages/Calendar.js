import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import Calendar from './components/calendar/calendar.js';
 import InputMoment from '../components/calendar/input-moment';
 import moment from 'moment';
//  import packageJson from '../package.json';
 import '../components/calendar/less/input-moment.less'; 
 import '../components/calendar/less/app.less';
 import API from "../utils/API";

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
      this.state.time1 = this.state.m.format('llll');
      this.forceUpdate()
    }
  
  else{
    this.state.time2 = this.state.m.format('llll');
    this.forceUpdate()
  }
  
};
click2 = () =>{
    API.addFreetime(this.state.time1, this.state.time2);
    console.log(this.state.time1, this.state.time2)
  }
  render() {
    return (
      <div className="app">
      {/* <h1>
        {packageJson.name}: {packageJson.version}
      </h1>
      <h2>{packageJson.description}</h2> */}
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
         start time <input type="text" value={this.state.time1}/><br></br>
         end time <input type="text" value={this.state.time2}/><br></br>
        <button onClick={this.click2}>Sends to API</button>
        </div>
    </div>
       
    );
  }
}

export default Calendar;
