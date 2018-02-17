import React, { Component } from 'react';
import axios from "axios"

import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import Test from "./Test"

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      todos: []
    }

    this.createTodoToState = this.createTodoToState.bind(this);
    this.deleteTodoFromState = this.deleteTodoFromState.bind(this);
    this.editTodoToState = this.editTodoToState.bind(this);
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

  createTodoToState(newTodo){
    this.setState({
      todos: this.state.todos.concat(newTodo)
    })
  }

  deleteTodoFromState(deleteindex){
    
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

  editTodoToState(index, newTodo){
    
    //Modify State
    const newTodos = this.state.todos.map((todo, i) => {
      if(index !== i){
        return todo
      }

      return {
        ...todo,
        text: newTodo
      }
    });

    this.setState({
      todos: newTodos
    }, () => {  
      // update todo
      //Send Put request to backend
      const todo = this.state.todos[index];
      axios.put('http://localhost:3000/todos/' + todo.id, {
        ...todo
      })
      .then(({ data }) => {
        console.log("Successfully Updated")
      }).catch((err) => {
        console.log(err)
      })
    });
  }

  render() {
    return (
     <div>

        <AddTodo createTodoToState={this.createTodoToState}  />

        <ul className="App">
          {this.state.todos.map((todo, index) => {
            return <TodoItem 
                    deleteTodoFromState={this.deleteTodoFromState} 
                    editTodoToState={this.editTodoToState}
                    todo={todo} 
                    index={index} 
                    key={index} />
          })}
        </ul>

        <Test name="Shoaib" clickme={(name) => {
          console.log(name)
        }} />  

     </div>
    
    );
  }
}

export default App;
