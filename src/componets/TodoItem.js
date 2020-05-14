import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const { id, title } = this.props.todo;
    return (
      <div>
        <p>
          {title} - <button onClick={this.props.delTodo.bind(this, id)} >Del</button>
        </p>  
      </div>
    )
  }
}

export default TodoItem;