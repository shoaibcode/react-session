import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Dummy from "./Dummy"

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      name: "Shoaib",
      students: [],
      info: {
        name: "Shoaib"
      }
    }

    //Methods
    this.changeName = this.changeName.bind(this);
  }

  changeName(){
    this.setState({
      name: "Redux"
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
           {this.state.name} <br />
            <Dummy 
              changeName={this.changeName}
              name={this.state.name} />

          </h1>

          <button onClick={this.changeName}>
            Change Name
          </button> 
        </header>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
