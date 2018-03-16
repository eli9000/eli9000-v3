import React, { Component } from 'react';

// import { injectGlobal } from 'styled-components';
// CSS imports
import '../styles/App.css';

// Container imports
import Header from './Header';
// import Icon from './components/Icon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
