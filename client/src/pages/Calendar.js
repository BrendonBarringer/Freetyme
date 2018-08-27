import React, { Component } from 'react';

 import InputMoment from '../components/calendar/input-moment';
 import moment from 'moment';

 import API from "../utils/API";
 import Navbar from '../components/Navbar';
 import './login.css';
 

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
        <Navbar />
      <div className="app">      
      <h6>WHEN ARE YOU FREE?</h6>
      <p>Select a start and end date/time</p>
      <form id="timeForm">
        {/* <div className="input">
          <input type="text" value={this.state.m.format('llll')} readOnly />
        </div> */}
        <InputMoment
          moment={this.state.m}
          onChange={this.handleChange}
          minStep={15}
          onSave={this.handleSave}
          className= "animated fadeInDownBig"
          id="calendarMove"
        />
       </form>
      <div id="saveTimes">
         <input placeholder="Start Time" class="animated lightSpeedIn" type="text" id="timeInput" value={this.state.time1}/><button id="calendarButton" class="animated bounceInRight" onClick={this.resetStart}>Clear</button><br></br>
          <input placeholder="End Time" class="animated lightSpeedIn" type="text" id="timeInput" value={this.state.time2}/><button id="calendarButton" class="animated bounceInRight" onClick={this.resetEnd}>Clear </button><br></br>
        <button id="calendarButton" class="animated lightSpeedIn" data-toggle="modal" data-target="#exampleModal" onClick={this.click2}>Save Your FreeTyme</button>
        </div>
       
    </div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Your freetyme has been saved!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>      
      <div class="modal-footer">
            
        <button type="button" class="btn btn-secondary" id="modal" ><a href="/freetime"  >View freetyme's</a></button>
       
       
        <button type="button" class="btn btn-secondary" id="modal" ><a href="/calendar" >Schedule more freetyme's</a></button>
       
      </div>
    </div>
  </div>
</div>
    </div>
       
    );
  }
}

export default Calendar;
