// create your App component here
import React, { Component } from 'react';

export default class myComponent extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(json => this.setState({ people: json.people }))
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <ul>
        {this.state.people.map(p => <li>{p.name} - {p.craft}</li>)}
      </ul>
    );
  }
}