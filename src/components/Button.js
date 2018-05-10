import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({
  className: props => props.className,
})`
  display: flex;
`;
