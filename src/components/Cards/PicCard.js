import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from '../../containers/CardWrapper';

/* ***************************************************************** */

const Title = styled.h1`
  margin: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 700px) {
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
    width: 60%;
    height: auto;
  }
`;

const PicWrapper = Wrapper.extend`
  justify-content: space-around;
  @media screen and (max-width: 700px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: auto;
  }
`;

/* ***************************************************************** */

const PicCard = ({ title, body, image }) => {
  return (
    <PicWrapper>
      <Content>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Content>
      <Pic src={image} alt="ish delt" />
    </PicWrapper>
  );
};

PicCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default PicCard;
