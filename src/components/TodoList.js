import React from "react";
import { TodoForm } from "./TodoForm.js"
import { Todo } from "./Todo.js"
import shortid from "shortid";
 
export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "all"
    }
  }
 
  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos]
    this.setState({todos: newTodos})
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    })
  }
  
  updateFilter = (string) => {
    this.setState({
      filter: string
    })
  }

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    let todos = []
    if (this.state.filter === 'all') {
      todos = this.state.todos;
    } else if (this.state.filter === 'active') {
      todos = this.state.todos.filter(x => !x.complete);
    }
    else if (this.state.filter === 'complete') {
      todos = this.state.todos.filter(x => x.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <div key={shortid.generate()}>
            <Todo 
              key={todo.id} 
              todo={todo}
              toggleComplete={() => this.toggleComplete(todo.id)}
              onDelete={() => this.handleDeleteTodo(todo.id)}
            /> 
          </div>
        ))}
        <div>todos left: {this.state.todos.filter(x => !x.complete).length}</div>
        <div>
          <button onClick={() => this.updateFilter("all")}>all</button>
          <button onClick={() => this.updateFilter("active")}>active</button>
          <button onClick={() => this.updateFilter("complete")}>complete</button>
        </div>
      </div>
    )
  }
}
