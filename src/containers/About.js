import React from 'react';
import styled from 'styled-components';

import PicCard from '../components/Cards/PicCard';

/* ***************************************************************** */

const AboutWrapper = styled.div.attrs({
  className: 'About',
})`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  > h1 {
    margin: 10px;
    text-align: center;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <h1>About this guy</h1>
      <PicCard
        title="Current and Future"
        body={
          <div>
            <p>this work that would be dope!</p>
            <ul>
              <li>This</li>
              <li>That</li>
            </ul>
          </div>
        }
        image="images/walter-incredulous.gif"
      />
    </AboutWrapper>
  );
};

export default About;
