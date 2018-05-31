import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../SkillCard/Icon';
import Wrapper from './Wrapper';

/* ***************************************************************** */

const IconBox = styled.div`
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

// const Button = styled.button`
//   background: lightblue;
//   color: black;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid blue;
//   border-radius: 3px;
// `;

/* ***************************************************************** */

const ContactCard = ({ className, name, info, link, fa, color }) => {
  return (
    <Link to={link} className={className}>
      <Wrapper data-id="wrapper">
        <IconBox>
          <Icon className={fa} color={color} />
        </IconBox>
        <Container>
          <HeadInfo>
            <Title>{name}</Title>
          </HeadInfo>
          <Body>{info}</Body>
        </Container>
      </Wrapper>
    </Link>
  );
};

export default ContactCard;
