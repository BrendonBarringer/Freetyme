import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import Calendar from './components/calendar/calendar.js';
 import InputMoment from '../components/calendar/input-moment';
 import moment from 'moment';
//  import packageJson from '../package.json';
 import '../components/calendar/less/input-moment.less'; 
 import '../components/calendar/less/app.less';

class Calendar extends Component {
  state = {
    m: moment()
  };

  handleChange = m => {
    this.setState({ m });
  };

  handleSave = () => {
    console.log('saved', this.state.m.format('llll'));
  };
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
          minStep={5}
          onSave={this.handleSave}
        />
      </form>
    </div>
       
    );
  }
}

export default Calendar;
