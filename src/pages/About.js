import React from 'react';
// import styled from 'styled-components';

import PageWrapper from '../containers/PageWrapper';
import PicCard from '../components/Cards/PicCard';

/* ***************************************************************** */

const About = () => {
  return (
    <PageWrapper>
      <h1>Stuff about me</h1>
      <br />
      <PicCard
        title="Early Years"
        body={
          <p>
            I was born in Orem, UT on Feb. 20th, 1982. I am the fifth out of
            eight chitlens. As a kid I enjoyed playing video games and running
            around in the wilderness of Alaska, where we lived for 10 years. In
            school I played sports like basketball, football and wrestling.
          </p>
        }
        image="images/boy-scout.jpg"
      />
      <PicCard
        title="Current and Future"
        body={
          <p>
            For the past 5 years I've been teaching Mathematics at the college
            level for the first three years and at the secondary level for the
            last two. As much as it pains me I've decided to persue a new career
            writing code. Being the function loving nerd that I am it feels like
            the right choice. That, and the brutality of the public education
            sector made it an easier choice.
          </p>
        }
        image="images/me-ein.jpg"
      />
      <PicCard
        title="Education"
        body={
          <p>
            I studied Mathematics at the University of Utah and graduated with
            my Bachelor of Science degree in 2009. During the past two years I
            have been grinding on the code and feel that I am ready to be
            utilized in regards to building rad sites and apps. Not only that
            but I bring with me all the skills I've developed as a teacher, such
            as public speaking, working in group dynamics, and problem solving
            in general.
          </p>
        }
        image="images/utes.png"
      />
    </PageWrapper>
  );
};

export default About;
