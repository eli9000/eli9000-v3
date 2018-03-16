import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import Rating from './Rating';

const Wrapper = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
`;

const IconBox = styled.div.attrs({
  className: 'fa-4x',
})`
  flex: 0 0 10%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  align-self: center;
`;

const SkillCard = () => {
  const data = [
    {
      category: 'front-end',
      type: 'framework',
      name: 'react',
      rating: 4,
      color: 'blue',
      fa: 'fab fa-react',
      desc: 'I have been doing React for a minute.',
    },
    {
      category: 'back-end',
      type: 'framework',
      name: 'node js',
      color: 'red',
      rating: 3,
      fa: 'fab fa-node-js',
      desc: 'I have been doing Node for a minute.',
    },
  ];

  return (
    <div className="SkillCard">
      {data.map(skill => (
        <Wrapper key={skill.name}>
          <IconBox>
            <Icon className={skill.fa} color={skill.color} />
          </IconBox>
          <Section>
            <Title>{skill.name}</Title>
            <Rating rating={skill.rating} />
          </Section>
        </Wrapper>
      ))}
    </div>
  );
};

export default SkillCard;
