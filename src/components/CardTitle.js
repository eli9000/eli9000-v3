import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const CardTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin-left: 10px;
  margin: 5px;
  @media (min-width: 480px) {
    font-size: 2em;
  }@media (min-width: 768px) {
    font-size: 2em;
  }@media (min-width: 992px) {
    font-size: 3.5em;
  }
`;

export default CardTitle;
