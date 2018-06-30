import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from '../../containers/Wrapper';

/* ***************************************************************** */

const Title = styled.h1`
  margin: 10px;
`;

//TODO: You need to suck some balls @critical @30min

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const Body = styled.div`
  text-align: left;
  padding: 10px;
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    line-height: 1.5em;
    padding: 10px;
  }
`;

const Pic = styled.img`
  width: 40%;
  height: 40%;
  padding-bottom: 10px;
  border-radius: 5px;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

/* ***************************************************************** */

const PicCard = ({ title, body, image }) => {
  return (
    <Wrapper flex="row">
      <Content>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Content>
      <Pic src={image} alt="ish delt" />
    </Wrapper>
  );
};

PicCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default PicCard;
