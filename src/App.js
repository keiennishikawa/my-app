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
    // console.log(`Add Todo / ID: ${id} Title: ${title}`)
    const newTodo = {
      id: id,
      title: title
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form addTodo={this.addTodo} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
