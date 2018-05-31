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
      <h1>About Me</h1>
      <PicCard
        title="The early years"
        body="Shit, just how long exactly can this body blurb be... man
        Mollit dolore id aliqua dolor dolor aliqua sit. Elit ut veniam velit irure minim aliquip commodo mollit consequat pariatur ex commodo ad. Amet adipisicing culpa incididunt anim eu dolor. Tempor officia deserunt laborum consequat est excepteur elit qui cupidatat et consectetur enim non nisi. Culpa laboris sint veniam nostrud culpa sint reprehenderit."
        image="images/boy-scout.JPG"
      />
      <PicCard
        title="Current and Future"
        body="Do cillum quis duis aliquip nulla quis pariatur. Minim culpa cupidatat velit aliquip eiusmod minim. Sunt nisi pariatur cillum irure deserunt voluptate incididunt veniam ipsum. Ea sint dolor deserunt amet proident occaecat sint quis proident."
        image="images/walter-incredulous.gif"
      />
    </AboutWrapper>
  );
};

export default About;
