import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    const Items = this.props.todos.map((item) =>
      <p key={item.id}>{item.title}</p>
    )
    return (
      <div>
       <h1>My Todo List</h1> 
       {Items}
      </div>
    )
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;