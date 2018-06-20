import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* ***************************************************************** */

const HeaderWrapper = styled.div.attrs({
  className: 'Header',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--black);
  border-bottom: 1px solid gray;
  > a {
    color: lightgrey;
    text-decoration: none;
  }
`;

/* ***************************************************************** */

export default () => {
  return (
    <HeaderWrapper>
      <Link to="/">HOME</Link>
    </HeaderWrapper>
  );
};
