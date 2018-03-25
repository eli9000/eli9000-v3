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
  border-bottom: 1px solid black;
  margin: 0 10px;
  height: 10vh;
`;

export default () => {
  return (
    <HeaderWrapper>
      <Link to="/">eli9000</Link>
      <Icon className="fab fa-facebook" color={'blue'} />
    </HeaderWrapper>
  );
};
