import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';

// Container imports
import App from './containers/App';
import SkillCard from './components/SkillCard';

// const client = new ApolloClient({
//   link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
//   cache: new InMemoryCache()
// });

const Routes = (
  // <ApolloProvider client={client}>
    <Router>
      <App>
        <Route exact path="/" component={SkillCard} />
      </App>
    </Router>
  // </ApolloProvider>
)

export default Routes;
