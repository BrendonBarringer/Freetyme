//profile page will display the users entries, and matches from other profiles?
import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from '../components/Navbar';

class Profile extends Component {
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

  
  render(){
      return(        
    <div>

       <Navbar />
      <Hero backgroundImage="https://www.azernews.az/media/pictures/climbing.jpg">

        <h1>FREETYME</h1>
        <h2>Profile PAGE</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To FreeTYME!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
           This will Be our Profile Page where the Users Schedule will Render.
            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada
              molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi
              hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh
              porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas. Aliquam
              blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta
              augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
              tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
              amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
              et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue
              at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula,
              erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget
              nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas
              vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus libero.
              Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros. Nullam
              tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit
              pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
      )
  }

  };
  
  export default Profile;
  