import React from 'react'; // exlint-disable-line
import styled from 'styled-components';

const Button = styled.button`
  height: auto;
  width: ${props => props.width};
  justify-content: ${props => props.justify-content};
`;

export default Button;
