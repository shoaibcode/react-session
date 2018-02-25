import React, { Component } from 'react';
import axios from "axios";

import { Link } from "react-router-dom";

class PostList extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(err => {
        // Err
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.slice(0, 5).map((post, index) => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PostList;