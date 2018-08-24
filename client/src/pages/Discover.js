//profile page will display the users entries, and matches from other profiles?
import React, { Component } from "react";
import Card from "../components/Card";
import Freetime from "./Freetime";

class Discover extends Component {
    render(props) {

        return (
            <div>
                <Freetime
                    name={"no@no.com"}
                    startTime={"5:00"}
                    endTime={"6:00"}
                    id={"12"}
                />

                <h1 className="text-center">Who is looking to climb</h1>
                <h3 className="text-center">
                    Select a climber you would like to meet!
                </h3>
                <Card image="http://www.lotusfw.com/wp-content/uploads/2018/05/iStock_000052229666_Medium-680x453.jpg" />
                {/* <h1 className="text-center">Who is looking to climb</h1> */}
                <br></br>
                <h3 className="text-center">
                    Select a climber you would like to meet!
                </h3>
                <Card image="https://s.hdnux.com/photos/31/57/37/6748129/3/920x920.jpg" />
            </div>

        );

    }

};


export default Discover;
