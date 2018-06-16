import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';

/* ***************************************************************** */

const Title = styled.h1`
  margin: 5px;
`;

const Body = styled.div`
  text-align: left;
  padding: 0 0 1em 10px;
  @media screen and (max-width: 700px) {
  }
`;

/* ***************************************************************** */

const InfoCard = ({ title, body }) => {
  return (
    <Wrapper flex="column">
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default InfoCard;
