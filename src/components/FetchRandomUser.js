import React from "react";

export class FetchRandomUser extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      people: [],
      loading: true
    };
  }
  
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=" + this.props.value;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({people: data.results, loading: false});
  }
  
  render() {
    if (this.state.loading || this.state.people==[]) {
      return (<div>loading...</div>)
    }

    return (
      <div>
        {this.state.people.map(person => (
          <div key={person.login.uuid}>
            <p>{person.name.title} {person.name.first} {person.name.last}</p>
            <p>Username: {person.login.username} - Email: {person.email} - Passwort: {person.login.password}</p>
            <img src={person.picture.large} />
          </div>
        ))}
      </div>
    );
  }
}