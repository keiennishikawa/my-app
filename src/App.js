import React, { Component } from 'react';
import Todos from './componets/Todos';
import Form from './componets/Form';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Ruby'
      },
      {
        id: 2,
        title: 'Python'
      },
      {
        id: 3,
        title: 'javascript'
      }
    ]
  }

  // Add Todo
  addTodo = (id, title) => {
    const newTodo = {
      id: id,
      title: title
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo =>
      todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form addTodo={this.addTodo} />
        <Todos todos={this.state.todos} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
