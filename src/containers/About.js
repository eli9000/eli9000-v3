import React from 'react';
import styled from 'styled-components';

import PicCard from '../components/Cards/PicCard';

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
      <h1>About this boiiii</h1>
      <PicCard
        title="The early years"
        body={
          <div>
            <p>this work that would be dope!</p>
            <ul>
              <li>This</li>
              <li>That</li>
            </ul>
          </div>
        }
        image="images/boy-scout.JPG"
      />
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
