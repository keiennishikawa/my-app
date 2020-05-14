import React, { Component } from 'react'

class Form extends Component {
  state = {
    id: '',
    title: ''
  }

  onChangeId = (e) => this.setState({ id: e.target.value });

  onChangeTitle = (e) => this.setState({ title: e.target.value });
  
  MyTodoSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.id, this.state.title);
    this.setState({ id: '', title: '' });
  }

  render() {
    return (
      <div>
       <form onSubmit={this.MyTodoSubmit}>
         <p>My Todo Form</p>
         <label>ID: </label>
         <input type='text' name='id' value={this.state.id}
          onChange={this.onChangeId}
         />
         <br />
         <label>Title: </label>
         <input type='text' name='title' value={this.state.title}
          onChange={this.onChangeTitle} />
         <br />
         <input type='submit' />
       </form> 
      </div>
    )
  }
}

export default Form;