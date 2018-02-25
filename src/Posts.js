//Packages
import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

//Component
import NotFound from "./NotFound"
import PostDetails from "./PostDetails";
import PostList from "./PostList";

class Posts extends Component {
    render() {
        return <div>
            <Switch>
              <Route exact path="/posts" component={PostList} />
              <Route path="/posts/:post" component={PostDetails} />
            </Switch>
          </div>;
    }
}

export default Posts;