import React from 'react';  // eslint-disable-line
import styled from 'styled-components';

const Icon = styled.i.attrs({
  className: props => props.className
})`
  color: ${props => props.color};
  height: 100%;
  width: auto;
`;

export default Icon;
