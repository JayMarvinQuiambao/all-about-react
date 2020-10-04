import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.todo.isChecked} 
                    onChange={() => this.props.todoChange(this.props.todo.id)}/>
                <label>{this.props.todo.description}</label>
            </div>
        )
    }
}

export default TodoItem
