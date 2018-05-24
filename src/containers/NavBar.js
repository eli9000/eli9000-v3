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
  margin: 5px 5px;
  > a {
    padding: 14px 20px;
    text-decoration: none;
    text-align: center;
    background-color: gold;
    width: 100%;
    margin-bottom: 5px;
  }
  > a:hover {
    /* prettier-ignore */
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                0 1px 18px 0 rgba(0, 0, 0, 0.12),
                0 3px 5px -1px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 700px) {
    display: flex; /* ${({ state }) =>
      state === 'CLOSED' ? 'none' : 'flex'} */
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    position: fixed;
    bottom: 0;
    right: 0;
    > a {
    }
    > a:last-child {
      border-bottom: none;
    }
  }
`;

/* ***************************************************************** */

const NavBar = () => {
  return (
    <NavWrapper>
      <Link to="/about">About Me</Link>
      <Link to="/coding">Coding</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact Me</Link>
    </NavWrapper>
  );
};

export default NavBar;
