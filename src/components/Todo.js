import React from "react";

export class Todo extends React.Component {
  render() {
    return( 
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{textDecoration: this.props.todo.complete ? "line-through" : ""}}
          onClick={this.props.toggleComplete}
        >
          {this.props.todo.text} 
        </div>
        <button onClick={this.props.onDelete}>x</button>
      </div>
    )
  }
}
