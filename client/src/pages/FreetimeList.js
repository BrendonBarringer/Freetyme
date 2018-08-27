//profile page will display the users entries, and matches from other profiles?
import React, { Component } from "react";
import API from "../utils/API";
import authUtil from "../utils/authUtil";
import Freetime from "../components/Freetime";
import Navbar from '../components/Navbar';



class FreetimeList extends Component {
    
    constructor(props) {
        super(props);
        this.state= { freetimeList:[],
                      loggedInId  : 0,
                      username    : ""
                    }; 
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
        authUtil.registerLoginNotify((loggedInId, username) => this.loginCallback(loggedInId, username) );
        API.getFreetime((result) => {
            this.setState({ freetimeList: result });
        })
    }

    componentWillUnmount() {
        authUtil.unregisterLoginNotify((loggedInId, username) => this.loginCallback(loggedInId, username) );   
    }
    
    loginCallback(loggedInId, username) {
        this.setState({loggedInId, username});
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
                                loggedInId={this.state.loggedInId}
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



