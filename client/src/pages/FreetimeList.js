//profile page will display the users entries, and matches from other profiles?
import React, { Component } from "react";
import API from "../utils/API";
import Freetime from "../components/Freetime";
import Navbar from '../components/Navbar';


class FreetimeList extends Component {
    
    constructor(props) {
        super(props);
        this.state={freetimeList:[]}   
    }
    

    // handleInputChange = event => {
    //   // Destructure the name and value properties off of event.target
    //   // Update the appropriate state
    //   const { name, value } = event.target;
    //   this.setState({
    //     [name]: value
    //   });
    // };

    // handleRemove = event => {
    //     // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    //     //   event.preventDefault();
    //     //   API.getRecipes(this.state.recipeSearch)
    //     //     .then(res => this.setState({ recipes: res.data }))
    //     //     .catch(err => console.log(err));
    //     API.removeFreetime(this.id);

    // };

    componentDidMount() {
        console.log("did mount")
        API.getFreetime( (result) => {
            console.log("Back from API");
            this.setState({ freetimeList: result });
        })
    }

    render(props) {
        // this.id=this.props.id
        console.log("render")
        return (
            <div>
                <Navbar loggedIn={this.state.loggedIn} username={this.state.username} />
                {
                    this.state.freetimeList.map(item => {
                        return (
                            <Freetime
                                name={"tbd"} 
                                startTime={item.startTime} 
                                endTime={item.endTime} 
                            />
                        )
                    })
                }
            </div>
        );
    }
}


export default FreetimeList;


