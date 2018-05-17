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
  justify-content: center;
  max-width: 980px;
  margin: auto;
  background: white;
  @media (min-width: 768px) {
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <NavBar />
        <div className="main">{this.props.children}</div>
      </AppWrapper>
    );
  }
}

export default App;

/* ***************************************************************** */
