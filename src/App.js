import React, { Component } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import './App.css';
import './data/skills.json';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

const skillsQuery = gql`
  query getSkills {
    skills {
      name
      desc
    }
  }
`;

client.query({ skillsQuery }).then(console.log);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          Hello bitches! I know how to
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
