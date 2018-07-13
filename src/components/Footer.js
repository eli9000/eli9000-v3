import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* ***************************************************************** */

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--footer-bg);
  width: 100%;
  margin-top: auto;
`;

/* ***************************************************************** */

class Footer extends Component {
  state = {
    email: '',
    message: '',
  };

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('nice bitch');
  };

  render() {
    return (
      <FooterWrapper>
        <p>&copy; Copyright 2017</p>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            style={{ float: 'right' }}
          />
          <br />
          <label>Message </label>
          <input
            name="message"
            type="text"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
          <br />
          <input type="submit" value="Submit" disabled />
        </form>
      </FooterWrapper>
    );
  }
}

export default Footer;
