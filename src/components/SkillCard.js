import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import Rating from './Rating';

const CardWrapper = styled.div`
  height: auto;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
  /* prettier-ignore */
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
              0 1px 18px 0 rgba(0, 0, 0, 0.12),
              0 3px 5px -1px rgba(0, 0, 0, 0.3);
  margin: 10px;
`;

const IconBox = styled.div.attrs({
  className: 'fa-4x',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

const HeadInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  align-self: center;
  width: auto;
  margin: 0;
`;

const Body = styled.p`
  align-self: flex-start;
  margin-left: 10px;
`;

const SkillCard = ({ name, fa, color, rating = 0, desc }) => {
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
};

export default SkillCard;
