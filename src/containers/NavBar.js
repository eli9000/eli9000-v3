import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* ***************************************************************** */

const NavWrapper = styled.div.attrs({
  className: 'NavBar',
})`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  > a {
    color: white;
    background-color: blue;
    padding: 14px 20px;
    text-decoration: none;
    text-align: center;
    width: 100%;
  }
  > a:hover {
    background-color: skyblue;
    color: black;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

/* ***************************************************************** */

const NavBar = () => {
  return (
    <NavWrapper>
      <Link to="/about">About</Link>
      <Link to="/coding">Coding</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact Me</Link>
    </NavWrapper>
  );
};

export default NavBar;
