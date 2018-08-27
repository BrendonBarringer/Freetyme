import React, { Component } from "react";
import API from "../../utils/API";

class Meeting extends Component {

  userIsInList(userId, userList) {
    for (let i = 0; i < userList.length; i++) {
      if (userId === userList[i].id) {
        return true;
      }
    }
    return false;
  }

  handleJoinMeeting = event => {
    API.joinMeeting(this.meeting.id, result => {
      // Redisplay the page
      window.location.href = "/meeting";
    });
  }

  handleUnjoinMeeting = event => {
    API.unjoinMeeting(this.meeting.id, result => {
      // Redisplay the page
      window.location.href = "/meeting";
    });
  }

  render(props) {
    this.meeting = this.props.meeting;
    return (
      <div className="results">
        <div>
          StartTime: {this.props.meeting.startTime}
        </div>
        <div>
          <div>Who's all signed up:</div>
          {
            this.props.meeting.Users.map(user => {
              return (<span key={user.id} className="mr-2">{user.username}</span>)
            })
          }
        </div>
        {/* Join or Unjoin depending on whether logged in user is already in the list or no */}
        {/* Must be logged in also */}
        { this.props.userId > 0 ? 
            this.userIsInList(this.props.userId, this.props.meeting.Users) ?
                      (<button className="btn btn-sm btn-primary" onClick={this.handleUnjoinMeeting}>Unjoin</button>) :
                      (<button className="btn btn-sm btn-primary" onClick={this.handleJoinMeeting}>Join</button>) :
            (<button className="btn btn-sm btn-primary" disabled>Join</button>)
        }
      </div>
    );
  }
}

export default Meeting;
