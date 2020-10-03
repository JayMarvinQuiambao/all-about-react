import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.todo.isChecked}/>{this.props.todo.description}
            </div>
        )
    }
}

export default TodoItem
