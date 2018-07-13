import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from '../../containers/CardWrapper';

/* ***************************************************************** */

const Title = styled.h1`
  margin: 0px;
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
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    line-height: 1.5em;
  }
`;

const Pic = styled.img`
  align-self: center;
  max-width: 250px;
  max-height: 250px;
  padding-bottom: 10px;
  border-radius: 5px;
  @media screen and (max-width: 700px) {
    width: 60%;
    height: auto;
  }
`;

const PicWrapper = Wrapper.extend`
  justify-content: space-around;
  @media screen and (max-width: 425px) {
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
      <Pic src={image} alt="ish" />
    </PicWrapper>
  );
};

PicCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default PicCard;
