import React from "react";

const initialState = {
  name: "",
  email: "",
  password: ""
}
  
export class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }
  
  handleChange = (event, name) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.state = this.setState(initialState)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <input 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange}
          /><br/>
          <input 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange}
          /><br/>
          <input 
            name="password" 
            type="password"
            value={this.state.password} 
            onChange={this.handleChange}
          /><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}