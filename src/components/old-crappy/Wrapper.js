import React from 'react'; // eslint-disable-line
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* ***************************************************************** */

const Wrapper = styled.div.attrs({
  className: props => props.className,
})`
  display: flex;
  flex-flow: rows nowrap;
  justify-content: center;
  margin: 10px;
  background: ${props => props.bg};
`;

export default Wrapper;

Wrapper.propTypes = {
  className: PropTypes.string,
  bg: PropTypes.string,
};
