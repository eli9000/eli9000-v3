import React from 'react'; // eslint-disable-line
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button.attrs({
  name: props => props.name,
})`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  width: auto;
  line-height: 2em;
  padding: 5px;
`;

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
