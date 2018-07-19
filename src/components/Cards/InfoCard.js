import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from '../../containers/CardWrapper';

/* ***************************************************************** */

const Title = styled.h1`
  padding-top: 0;
`;

const Body = styled.div`
  align-self: center;
  text-align: left;
  padding-left: 10px;
  @media screen and (max-width: 700px) {
  }
`;

const InfoWrapper = Wrapper.extend`
  display: flex;
  justify-content: column;
`;

/* ***************************************************************** */

const InfoCard = ({ title, body }) => {
  return (
    <InfoWrapper>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </InfoWrapper>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default InfoCard;
