import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from './containers/NavBar';

import './global-styles';

/* ***************************************************************** */

const AppWrapper = styled.div.attrs({
  className: 'app',
})`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 980px;
  min-width: 375px;
  margin: auto;
  background-color: white;
  @media (min-width: 768px) {
  }
  > .main {
    border-top: 3px solid #66462c;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <NavBar />
        <div className="main">{this.props.children}</div>
      </AppWrapper>
    );
  }
}

export default App;

/* ***************************************************************** */
