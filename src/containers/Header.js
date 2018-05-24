import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../components/Icon';

const HeaderWrapper = styled.div.attrs({
  className: 'Header',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  > a {
    text-decoration: none;
  }
`;

export default () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <code>eli9000</code>
      </Link>
      <Icon className="fab fa-facebook fa-2x" color={'blue'} />
    </HeaderWrapper>
  );
};
