import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerGlobal = ({ className, ...props }) => (
  <div className={`main ${className}`} {...props} />
);

ContainerGlobal.displayName = 'Global.Container';

ContainerGlobal.propTypes = {
  className: PropTypes.string,
};

ContainerGlobal.defaultProps = {
  className: '',
};

export default styled(ContainerGlobal)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 0.5em 1em;
  h1 {
    margin: 0;
  }
`;
