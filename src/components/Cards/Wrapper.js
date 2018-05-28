import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: ${props => props.flex};
  justify-content: center;
  align-items: stretch;

  margin: 0 10px 20px 10px;
  padding: 10px 10px 10px 5px;
  width: auto;
  /* prettier-ignore */
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
              0 1px 18px 0 rgba(0, 0, 0, 0.12),
              0 3px 5px -1px rgba(0, 0, 0, 0.3);
`;

export default Wrapper;
