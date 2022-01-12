import React from "react";
import shortid from "shortid";

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      email: '',
      password: ''
    }
  }

  handleChange = (event, name) => {
      this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if ( this.state.text.length === 0 ) {
      return;
    } else {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false
    });
    }

    this.setState({
      text: ""
    });
  };

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Todo..."
          />
          <button onClick={this.handleSubmit}>Todo hinzufügen</button>
        </form>
      );
  }
}