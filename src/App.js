import React, { Component } from 'react';
import axios from "axios"

import AddTodo from "./AddTodo"


class App extends Component {
  
  constructor(){
    super();

    this.state = {
      todos: []
    }

    this.createTodo = this.createTodo.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:3000/todos')
         .then((response) => {
            this.setState({
              todos: response.data
            });
         }).catch((err) => {
           console.log("err", err)
         })
  }

  createTodo(newTodo){
    this.setState({
      todos: this.state.todos.concat(newTodo)
    })
  }

  render() {
    return (
     <div>

        <AddTodo createTodo={this.createTodo}  />

        <ul className="App">
          {this.state.todos.map(function (todo, index) {
            return <li key={index}>{todo.text}</li>
          })}
        </ul>
     </div>
    
    );
  }
}

export default App;
