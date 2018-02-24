import React, { Component } from 'react';
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
               this is About 
               <Link to="/">Home</Link>
            </div>
        );
    }
}

export default About;