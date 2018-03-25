import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import Rating from './Rating';

const Wrapper = styled.div`
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
  align-self: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  padding-left: 10px;
`;

const Title = styled.h1`
  align-self: center;
  width: 120px;
  margin: 0;
`;

const Body = styled.p`
  align-self: center;
  margin-left: 10px;
`;

const SkillCard = ({ name, fa, color, rating = 0, desc }) => {

  return (
    <Wrapper>
      <IconBox>
        <Icon className={fa} color={color} />
      </IconBox>
      <Section>
        <Title>{name}</Title>
        <Rating rating={rating} />
      </Section>
      <Body>{desc}</Body>
    </Wrapper>
  );
};

export default SkillCard;
