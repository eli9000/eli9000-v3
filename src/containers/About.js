import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const AboutWrapper = styled.div.attrs({
  className: 'About',
})`
  dislpay: flex;
  flex: 1 100%;
  justify-content: center;
  max-height: 60vh;
  min-height: 60vh;
  > h1 {
    margin: 0;
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
