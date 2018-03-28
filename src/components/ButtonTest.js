import React, { Component } from 'react';
// import axios from 'axios';

export default class ButtonTest extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseCount}>Boink</button>
      </div>
    );
  }
}
