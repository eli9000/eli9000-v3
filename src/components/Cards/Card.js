import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';

/* ***************************************************************** */

const Title = styled.h1`
  margin: 10px;
  text-decoration: underline;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const Body = styled.div`
  text-align: left;
  padding: 10px;
  @media screen and (max-width: 700px) {
    line-height: 1.5em;
    padding: 10px;
  }
`;

const Pic = styled.img`
  width: 40%;
  height: 40%;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

/* ***************************************************************** */

const Card = ({ title, body, image }) => {
  return (
    <Wrapper flex="column">
      <Title>{title}</Title>
      <Content>
        <Body>{body}</Body>
        <Pic src={image} alt="ish delt" />
      </Content>
    </Wrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
