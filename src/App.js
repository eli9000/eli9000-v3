import React, { Component } from 'react';
import styled from 'styled-components';

import './global-styles';

/* ***************************************************************** */

const AppWrapper = styled.div.attrs({
  className: 'app',
})`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  max-width: 1024px;
  min-width: 375px;
  min-height: 100vh;
  margin: auto;
  background-color: white;
`;

/* ***************************************************************** */

class App extends Component {
  render() {
    return <AppWrapper>{this.props.children}</AppWrapper>;
  }
}

export default App;
