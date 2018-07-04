import React from 'react';
import Navigation from '../components/Navigation/Navigation.jsx';

export default class Template extends React.Component {
  render() {
    if (this.props.location.pathname !== '/') {
      return <Navigation>{this.props.children()}</Navigation>;
    } else {
      return this.props.children();
    }
  }
}
