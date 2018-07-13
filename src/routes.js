import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Container imports
import App from './App';
import { About, Coding, Links, Home, Projects } from './pages';

import { Header, Navbar } from './components';
import Footer from './components/Footer';

/* ***************************************************************** */

const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'http://localhost:4000/graphql',
    uri:
      'https://73djvehev1.execute-api.us-east-1.amazonaws.com/production/graphql',
  }),
  cache: new InMemoryCache(),
});

const Routes = (
  <ApolloProvider client={client}>
    <Router>
      <App>
        <Header />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/coding" component={Coding} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/links" component={Links} />
        <Footer />
      </App>
    </Router>
  </ApolloProvider>
);

export default Routes;
