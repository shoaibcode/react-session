import React, { Component } from 'react';

import {Link } from "react-router-dom"


class Home extends Component {
    render() {
        return (
            <div>
               this is Home 
               <Link to="/about"> About  </Link>
            </div>
        );
    }
}

export default Home;