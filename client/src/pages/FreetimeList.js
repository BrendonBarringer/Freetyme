//profile page will display the users entries, and matches from other profiles?
import React, { Component } from "react";
import API from "../utils/API";
import authUtil from "../utils/authUtil";
import Freetime from "../components/Freetime";
import Navbar from '../components/Navbar';



class FreetimeList extends Component {
    
    constructor(props) {
        super(props);
        this.state={freetimeList:[]} 
        this.loggedInId = 0;  
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
        this.loggedInId = authUtil.getUserId();
        API.getFreetime((result) => {
            this.setState({ freetimeList: result });
        })
    }

    render(props) {

        return (
            
            <div className="freetimesList">
                <Navbar />
                <div className="list">
                {
                    this.state.freetimeList.map((item, i) => {
                        return (
                            <Freetime
                                key={i}
                                loggedInId={this.loggedInId}
                                name={item.User.username} 
                                startTime={item.startTime} 
                                endTime={item.endTime} 
                                freetimeId={item.id}
                                userId={item.User.id}
                            />
                        )
                    })
                }
                </div>
                
            </div>
        );
    }
}


export default FreetimeList;



