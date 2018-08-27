//profile page will display the users entries, and matches from other profiles?
import React, { Component } from "react";
import Card from "../components/Card";
// import Freetime from "../components/Freetime/Freetime";
import Navbar from '../components/Navbar';
import { Container, Row, Col } from 'reactstrap';

class Discover extends Component {
    render(props) {

        return (
            <div>
                <Navbar />

                <h1 className="text-center">Who is looking to climb</h1>
                <h3 className="text-center">
                    Select a climber you would like to meet!
                </h3>
                <Row>
                    <Col><Card image="http://storage.torontosun.com/v1/dynamic_resize/sws_path/suns-prod-images/1297999004111_ORIGINAL.jpg?size=520x" /></Col>
                </Row>    
                <Row>
                    <Col><Card image="https://qph.fs.quoracdn.net/main-qimg-d5ce2918941405b38a96b8249085e750-c" /></Col>
                </Row>
                <Row>
                    <Col><Card image="https://pixfeeds.com/images/adventure/rock-climbing/1280-115011797-woman-rockclimber.jpg" /></Col>
                </Row>

            </div>

        );

    }

};


export default Discover;
