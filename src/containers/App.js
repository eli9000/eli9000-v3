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
  @media (min-width: 768px) {
    .Header {
      flex: 1 100%;
    }
    .Navbar {
      flex: 1 auto;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <NavBar />
        {this.props.children}
      </AppWrapper>
    );
  }
}

export default App;

/* ***************************************************************** */
