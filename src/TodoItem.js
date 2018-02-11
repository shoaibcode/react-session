import React from 'react';


class TodoItem extends React.Component {
    constructor(){
        super();

        this.state = {
            isEditing: false
        } 

        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    deleteTodo(){
        this.props.deleteTodoFromState(this.props.index);
    }

    toggleEditing(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    editTodo(){
        this.props.editTodoToState(this.props.index, this.todo.value);
        this.toggleEditing();
    }

    render(){
        const { todo } = this.props;

        if(this.state.isEditing){
            return <li>
                 <input 
                 ref={(anything) => {
                    this.todo = anything;
                 }} 
                  defaultValue={todo.text} />
                <button onClick={this.editTodo}>Save</button>
                <button onClick={this.toggleEditing}>Cancel</button>
                </li>
        }

        return <li>
            {todo.text}
            <button onClick={this.deleteTodo}>Delete</button>
            <button onClick={this.toggleEditing}>Edit</button>
        </li>
    }
}

export default TodoItem;
