import React, { Component } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


class PostDetails extends Component {
    constructor(){
        super()

        this.state = {
            postDetails: {},
            isLoading: true
        };
    }
  componentDidMount() {

    axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.post)
      .then((response) => {
        this.setState({ 
            postDetails: response.data,
            isLoading: false
        });
      }).catch((err) => {
          this.setState({
            postDetails: {},
            isLoading: false
          });
      })

    

    //Send ajax
    //https://jsonplaceholder.typicode.com/posts/ + post._id
    //need to set data to state
  }

  render() {

    const { isLoading, postDetails } = this.state;
   
    if(isLoading){
        return <div>Loading...........</div>
    }

    return <div>
        <h2>{postDetails.title}</h2>
        <div> {postDetails.body}</div>
        <div>
          <Link to="/posts">Back to Posts List</Link>
        </div>
      </div>;
  }
}

export default PostDetails;
