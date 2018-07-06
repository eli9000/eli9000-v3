import React from 'react';
// import styled from 'styled-components';

import PageWrapper from '../containers/PageWrapper';
import PicCard from '../components/Cards/PicCard';

/* ***************************************************************** */

const About = () => {
  return (
    <PageWrapper>
      <h1>About this guy</h1>
      <PicCard
        title="Current and Future"
        body="Shit's weak"
        image="images/walter-incredulous.gif"
      />
    </PageWrapper>
  );
};

export default About;
