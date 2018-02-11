import React from 'react';
import axios from "axios"


class AddTodo extends React.Component {
    constructor(){
        super()

        this.state = {
            text: ""
        };

        this.changeText = this.changeText.bind(this);
        this.addTodoToState = this.addTodoToState.bind(this);
    }   

    addTodoToState(event){
        event.preventDefault();

        axios.post('http://localhost:3000/todos', {
            text: this.state.text
        }).then((response) => {
            console.log(response.data);
            
            this.props.createTodoToState(response.data)
        });

        /*
        this.props.createTodo({
           text: this.state.text
        });*/

        this.setState({
            text: ""
        });

    }

    changeText(event){
        this.setState({
            text: event.target.value
        })
    }

    render(){
        return (
                <div>
                    <form onSubmit={this.addTodoToState}>
                        <input 
                            type="text" 
                            value={this.state.text} 
                            onChange={this.changeText}
                            />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            
        )
    }
}

export default AddTodo;