import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuButton = styled.button.attrs({
  className: 'menuButton',
})`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 80%;
  right: 80%;
  height: 100%;
  width: auto;
  max-width: 3em;
  z-index: 100;

  background-color: red;
  border: 1px solid white;
  border-radius: 50px;
`;
