import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* ***************************************************************** */

const NavWrapper = styled.div.attrs({
  className: 'NavBar',
})`
  dislpay: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const LinkList = styled.ul`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding-left: 0;
  list-style-type: none;
  @media (min-width: 768px) {
    width: 250px;
  }
  > li,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: lightblue;
    @media (min-width: 768px) {
      margin: 10px;
    }
  }
`;

/* ***************************************************************** */

const NavBar = () => {
  return (
    <NavWrapper>
      <LinkList>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/coding">Coding</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </LinkList>
    </NavWrapper>
  );
};

export default NavBar;
