import React, { Component } from 'react';
import styled from 'styled-components';

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
`;

class App extends Component {
  render() {
    return <AppWrapper>{this.props.children}</AppWrapper>;
  }
}

export default App;

/* ***************************************************************** */
