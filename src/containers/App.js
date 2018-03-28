import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from './Header';
import NavBar from './NavBar';
// import Home from './Home';

/* ***************************************************************** */

const AppWrapper = styled.div.attrs({
  className: 'App',
})`
  dislpay: flex;
  flex: 1 100%;
  height: 100vh;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      results: {},
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      baseURL: 'https://s3.amazonaws.com/e9k-static/skills/skills.json',
      // url: '/code-skills',
    }).then(response => {
      console.log(response);
      this.setState({ results: { ...response.data }, loading: false });
    });
  }

  render() {
    return (
      <AppWrapper>
        <Header />
        {this.props.children}
        <NavBar />
      </AppWrapper>
    );
  }
}

export default App;

/* ***************************************************************** */
