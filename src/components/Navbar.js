import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { link } from 'fs';

/* ***************************************************************** */

const NavWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--footer-bg);

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
      border: none;
      box-shadow: 5px 5px 5px maroon;
      z-index: 2;
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
        <Link to="/about">ABOUT</Link>
        <Link to="/coding">CODING</Link>
        <Link to="/resume">RESUME</Link>
        <Link to="/contact">LINKS</Link>
      </NavWrapper>
    );
  }
}

const Navbar1 = ({ links }) => (
  <div id="navigation" className="navigation">
    <nav>
      <ul>{links.map((link, index) => <li key={index}>{link.label}</li>)}</ul>
    </nav>
  </div>
);

Navbar1.defaultProps = {
  links: [
    { label: 'About', href: '/about' },
    { label: 'Coding', href: '/coding' },
    { label: 'Resume', href: '/resume' },
    { label: 'Links', href: '/contact' },
  ],
};

export default Navbar;
