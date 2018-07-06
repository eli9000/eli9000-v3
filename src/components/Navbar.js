import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* ***************************************************************** */

const NavWrapper = styled.div.attrs({
  className: 'Navbar',
})`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: darkred;
  margin-bottom: 10px;

  > a {
    padding: 14px 20px;
    text-decoration: none;
    text-align: center;
    width: 100%;
    border-right: 1px solid black;
    color: white;
  }
  > a:hover {
      background-color: white;
      color: red;
      font-weight: bolder;
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0 3px 5px -1px rgba(0, 0, 0, 0.3);
    }

    > a:last-child {
      border-right: none;
      }

    @media screen and (max-width: 700px) {
      display: flex; /* ${({ state }) =>
        state === 'CLOSED' ? 'none' : 'flex'} */
      flex-flow: row wrap;
      > a {
        width: 25%;
        padding: 14px 0;
    }
  }
`;

/* ***************************************************************** */

class Navbar extends Component {
  render() {
    return (
      <NavWrapper>
        <Link to="/coding">CODING</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/resume">RESUME</Link>
        <Link to="/contact">LINKS</Link>
      </NavWrapper>
    );
  }
}

export default Navbar;
