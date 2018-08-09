import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from '../../containers/CardWrapper';

/* ***************************************************************** */

const Title = styled.h1`
  margin-top: 0;
  padding-top: 0;
`;

const Body = styled.div`
  align-self: flex-start;
  padding: 0 10px;
  @media screen and (max-width: 700px) {
  }
`;

const InfoWrapper = Wrapper.extend`
  display: flex;
  flex-flow: column nowrap;
`;

/* ***************************************************************** */

const InfoCard = ({ title, body }) => {
  return (
    <InfoWrapper>
      <Title>{title}</Title>
      <Body>
        <i className="fas fa-arrow-alt-circle-right" />&nbsp;
        {body}
      </Body>
    </InfoWrapper>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default InfoCard;
