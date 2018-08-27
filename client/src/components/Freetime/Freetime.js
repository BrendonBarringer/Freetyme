//profile page will display the users entries, and matches from other profiles?
import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../Card";
import { Container, Row, Col } from 'reactstrap';
import moment from "moment";


class Freetime extends Component {

    handleRemove = event => {
        API.removeFreetime(this.freetimeId, result => {
            // Redisplay the page
            window.location.href = "/freetime";
        });
    };

    handleStartMeeting = event => {
        API.startMeeting(this.startTime, result => {
            // Redisplay the page
            window.location.href = "/meeting";
        });
    }

    formatTime = (time) => {
        return moment(time).format('MMM DD, YYYY  h:mm A')
    }

    render(props) {
        this.freetimeId = this.props.freetimeId;
        this.userId = this.props.userId;
        this.startTime = this.props.startTime;
        this.fullname = this.props.fullname;
        this.climbAbility = this.props.climbAbility;
        return (

            <div>
                <div className="results">

                    <p>
                        Name: {this.props.fullname}</p>
                       <p> Email: {this.props.name}</p>
                       <p> Experience: {this.props.climbAbility}
                    </p>

                    <p>
                    Start Time: {this.formatTime(this.props.startTime)}
                    </p>
                    <p>
                        End Time: {this.formatTime(this.props.endTime)}
                    </p>

                    {/* Disable the Remove button if this user didn't create this Freetime */}
                    {this.props.loggedInId === this.props.userId ?
                        (<button className="btn btn-sm btn-primary" onClick={this.handleRemove}>Remove</button>) :
                        (<button className="btn btn-sm btn-primary" onClick={this.handleRemove} disabled>Remove</button>)
                    }
                         <button className="btn btn-sm btn-primary" onClick={this.handleStartMeeting}>Start Meeting</button>


                    

                </div>
            </div>
        );
    }
}


export default Freetime;
