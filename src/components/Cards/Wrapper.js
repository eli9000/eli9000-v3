import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
  className: props => props.className || 'card-wrapper',
})`
  display: flex;
  flex-flow: ${props => props.flex};
  justify-content: space-between;
  align-items: flex-start;

  margin: 10px;
  padding: 10px;
  width: auto;
  min-width: 350px;
  border-radius: 10px;
  /* prettier-ignore */
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
              0 1px 18px 0 rgba(0, 0, 0, 0.12),
              0 3px 5px -1px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    margin: 10px 60px;
  }
`;

export default Wrapper;
