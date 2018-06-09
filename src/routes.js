import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Container imports
import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Coding from './containers/Coding';
import Projects from './containers/Projects';
import Resume from './containers/Resume';
import Contact from './containers/Contact';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    // uri:
    //   'https://73djvehev1.execute-api.us-east-1.amazonaws.com/production/graphql',
  }),
  cache: new InMemoryCache(),
});

const Routes = (
  <ApolloProvider client={client}>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/coding" component={Coding} />

        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
      </App>
    </Router>
  </ApolloProvider>
);

export default Routes;
