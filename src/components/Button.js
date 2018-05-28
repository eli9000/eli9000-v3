import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button.attrs({
  className: props => props.className,
})`
  display: flex;
`;
