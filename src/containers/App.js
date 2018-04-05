import React, { Component } from 'react';
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
