import React, { Component } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import SkillsList from './components/SkillsList';
import './App.css';

import Development from './containers/Development';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          Greetings yall.
          <div className="App-Skill">
            <Development />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
