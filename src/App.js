import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

import Dummy from "./Dummy"


/*

//http://jsbin.com/

var names = ["Redux", "React", "Mobx"];
var names = [
  {name: "Redux"},
  { name: "React"}
];

var newName = names.map(function(name, index){
    return name + "  HII"
});

//loopover
// modify
//return new array


console.log(newName)

*/


class App extends Component {
  
  constructor(){
    super();

    this.state = {
      list: [],
      isLoading: false
    }
  }

  componentDidMount(){

    this.setState({
      isLoading: true
    })   

    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response.data);
          /*   do not use set state multiple times
          this.setState({
            isLoading: false
          }) */ 

          this.setState({
            list: response.data,
            isLoading: false
          });


        }).catch(() => {})
  }

  render() {
    if(this.state.isLoading){
      return <div>Loading..................</div>
    }

    return (
      <ul className="App">
        {this.state.list.map(function(listItem, index){
          return <li key={listItem.id}>
            {listItem.title}
          </li>
        })}

      </ul>
    );
  }
}

export default App;
