import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import Rating from './Rating';
import Wrapper from '../Cards/Wrapper';

const IconBox = styled.div.attrs({
  className: 'fa-4x',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const HeadInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  align-self: center;
  width: auto;
  margin: 0 0 0 10px;
`;

const Body = styled.div`
  align-self: flex-start;
  margin: 0 0 0 10px;
`;

const SkillCard = ({ name, fa, color, rating = 0, desc }) => {
  return (
    <Wrapper>
      <IconBox>
        <Icon className={fa} color={color} />
      </IconBox>
      <Container>
        <HeadInfo>
          <Title>{name}</Title>
          <Rating rating={rating} />
        </HeadInfo>
        <Body>{desc}</Body>
      </Container>
    </Wrapper>
  );
};

export default SkillCard;
