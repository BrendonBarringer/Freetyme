//profile page will display the users entries, and matches from other profiles?
import React, { Component } from "react";
import API from "../utils/API";


class Freetime extends Component {

    // handleInputChange = event => {
    //   // Destructure the name and value properties off of event.target
    //   // Update the appropriate state
    //   const { name, value } = event.target;
    //   this.setState({
    //     [name]: value
    //   });
    // };

    handleRemove = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        //   event.preventDefault();
        //   API.getRecipes(this.state.recipeSearch)
        //     .then(res => this.setState({ recipes: res.data }))
        //     .catch(err => console.log(err));
        API.removeFreetime(this.id);

    };

    render(props) {
        this.id=this.props.id
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
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        );
    }
}


export default Freetime;
