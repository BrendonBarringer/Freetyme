import React, { Component } from "react";
import API from "../utils/API";
import authUtil from "../utils/authUtil";
import Meeting from "../components/Meeting";
import Navbar from '../components/Navbar';


class MeetingList extends Component {
  
  constructor(props) {
    super(props);
    this.state={ meetingList: [],
                 loggedInId  : 0,
                 username    : ""
               }; 
  }

  componentDidMount() {
    authUtil.registerLoginNotify((loggedInId, username) => this.loginCallback(loggedInId, username) );
    API.getMeeting(result => {
      this.setState({ meetingList: result });
    })
  }

  componentWillUnmount() {
      authUtil.unregisterLoginNotify((loggedInId, username) => this.loginCallback(loggedInId, username) );   
  }

  loginCallback(loggedInId, username) {
      this.setState({loggedInId, username});
  }

  render(props) {
    return (
      <div>
        <Navbar />
        {
          this.state.meetingList.map((item, i) => {
            return (
              <Meeting
                key={i}
                meeting={item}
                userId={this.state.loggedInId}
              />
            )
          })
        }
      </div>
    );
  }
}

export default MeetingList;



