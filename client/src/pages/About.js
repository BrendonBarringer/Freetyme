// About page to explain how the app works to new users
//Static?
import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from '../components/Navbar';


class About extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };
  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;


    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };


  render() {
    return (
      <div>
         <Navbar />
        <Hero backgroundImage="https://cdn.mpora.com/featured_image/5ab9061f750b9.jpg">
          <h1>FREETYME</h1>
          <h2>Bringing Climbers together since 2018</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>What is Freetyme?</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                Climbing is much safer with a belayer (spotter), but climbers often have a hard time finding other
                climbers available when they want to climb.
          </p>
              <p>
                Freetyme allows users to select available time slots when they would like to climb, and get matched
                up with other users who are available during the same time slots!
          </p>
              <p>
                This will help climbers spend more time scaling rock and less time finding belayers.

          </p>
              <p>
                Getting started is easy! Create an account, select your available times in our calendar and get matched
                with other climbers. It's that easy!
          </p>
              <p>
                So, don't get left hangin'...Use Freetyme and Climb On!
          </p>
          <button>Create Account</button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default About;
