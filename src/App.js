import React, { Component } from 'react';
import axios from "axios"

import AddTodo from "./AddTodo"


class App extends Component {
  
  constructor(){
    super();

    this.state = {
      todos: []
    }

    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this)
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

  deleteTodo(deleteindex){
    
    const todo = this.state.todos[deleteindex];
    
    axios.delete('http://localhost:3000/todos/' + todo.id)
        .then(() => {
          console.log("Success Deleted")
        })
        .catch(() => {
          console.log("Errro Deleted")
        })

    
    //Immutablilty
    const newTodos = this.state.todos.filter((todo, index) => {
        return deleteindex !== index;
    });

    
    this.setState({
      todos: newTodos
    });

  }

  render() {
    return (
     <div>

        <AddTodo createTodo={this.createTodo}  />

        <ul className="App">
          {this.state.todos.map((todo, index) => {
            return <li key={index}>
               {todo.text}
               <button onClick={() => {
                 this.deleteTodo(index)
               }}>Delete</button>
            </li>
          })}
        </ul>
     </div>
    
    );
  }
}

export default App;
