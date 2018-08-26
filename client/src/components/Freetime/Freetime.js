//profile page will display the users entries, and matches from other profiles?
import React, { Component } from "react";
import API from "../../utils/API";


class Freetime extends Component {

    handleRemove = event => {
        API.removeFreetime(this.freetimeId);
    };

    handleStartMeeting = event => {
        API.startMeeting(this.startTime, result => {
            console.log(result);
        });
    }

    render(props) {
        this.freetimeId=this.props.freetimeId;
        this.userId=this.props.userId;
        this.startTime = this.props.startTime;
        return (
            <div>
                
                <p>
                    Name: {this.props.name}
                </p>
                <p>
                    Start Time: {this.props.startTime}
                </p>
                <p>
                    End Time: {this.props.endTime}
                </p>
                {/* Disable the Remove button if this user didn't create this Freetime */}
                { this.props.loggedInId === this.props.userId ?
                    (<button className="btn btn-sm btn-primary" onClick={this.handleRemove}>Remove</button>) :
                    (<button className="btn btn-sm btn-primary" onClick={this.handleRemove} disabled>Remove</button>)
                }
                <button className="btn btn-sm btn-primary" onClick={this.handleStartMeeting}>
                    Start Meeting
                </button>
                
            </div>
        );
    }
}


export default Freetime;
