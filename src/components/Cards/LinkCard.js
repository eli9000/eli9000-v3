import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../SkillCard/Icon';
import Wrapper from './Wrapper';

/* ***************************************************************** */

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100px;
`;

const Title = styled.h1`
  align-self: center;
  width: auto;
  margin: 0 0 0 10px;
`;

const CardWrapper = Wrapper.extend`
  justify-content: flex-start;
  align-content: center;
  &:hover {
    box-shadow: none;
    background-color: #eee;
    color: red;
  }
`;

/* ***************************************************************** */

const LinkCard = ({ name, link, fa, color }) => {
  return (
    <Link to={link} target="_blank">
      <CardWrapper>
        <IconBox>
          <Icon className={fa} color={color} />
        </IconBox>
        <Title>{name}</Title>
      </CardWrapper>
    </Link>
  );
};

export default LinkCard;
