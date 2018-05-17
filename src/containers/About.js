import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const AboutWrapper = styled.div.attrs({
  className: 'About',
})`
  dislpay: flex;
  height: 100%;
  > h1 {
    margin: 10px;
    text-align: center;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <h1>About Me</h1>
    </AboutWrapper>
  );
};

export default About;
