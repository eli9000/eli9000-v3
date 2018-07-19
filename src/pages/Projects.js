import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../containers/PageWrapper';
import InfoCard from '../components/Cards/InfoCard';

/* ***************************************************************** */

const Projects = () => {
  return (
    <PageWrapper>
      <h1>Projects I'm Working On</h1>
      <br />
      <InfoCard
        title="801-code"
        body="Another project built using AWS Serverless architecure. Hoping to mold it in to a site where coders from Utah can share projects and advice about anything coding."
      />
      <InfoCard
        title="Homewise"
        body="Basement-labs project currently under development. A place where users can find deals on everyday home maintenance projects."
      />
      <InfoCard
        title="Devs who Shred"
        body="Meetup idea for developers who shred the gnar. Check back soon for more info!"
      />
      <InfoCard
        title="Security"
        body="A personal home security system I'm building with a Raspberry Pi and powered by Python and Aws."
      />
    </PageWrapper>
  );
};

export default Projects;
