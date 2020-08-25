import React from 'react';
import TodoItem from './TodoItem';
import todoData from './todoData';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
  this.setState(prevState => {
    const updatedTodos = prevState.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    return {
      todos: updatedTodos
    }
  })
   
  }
  render() {
    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item} 
      handleChange={this.handleChange}
    />)

    return (
      <div className="todo-list">
      {todoItems}
     </div>
    );
  }
  }


export default App;
