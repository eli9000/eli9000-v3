import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

/* ***************************************************************** */

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: stretch;

  margin: 0 10px 20px 10px;
  padding: 10px 10px 10px 5px;
  width: auto;
  /* prettier-ignore */
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
              0 1px 18px 0 rgba(0, 0, 0, 0.12),
              0 3px 5px -1px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  margin: 10px;
  text-align: center;
  color: green;
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

const Blurb = styled.div`
  text-align: left;
  background-color: red;
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
    height: 60%;
    width: 60%;
  }
`;

/* ***************************************************************** */

const Card = ({ title, blurb, image }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <Blurb>{blurb}</Blurb>
        <Pic src={image} alt="ish delt" />
      </Content>
    </Wrapper>
  );
};

export default Card;
