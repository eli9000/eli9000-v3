import React from 'react';
import styled from 'styled-components';

import Icon from '../components/Icon';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

export default () => {
  return (
    <Wrapper>
      <Icon className="fab fa-facebook" color={'blue'} />
    </Wrapper>
  );
};
