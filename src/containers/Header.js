import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div.attrs({
  className: 'Header',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export default () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <code>eli9000.com</code>
      </Link>
    </HeaderWrapper>
  );
};
