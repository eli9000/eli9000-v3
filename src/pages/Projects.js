import React from 'react';
import styled from 'styled-components';

import InfoCard from '../components/Cards/InfoCard';

/* ***************************************************************** */

const ContactWrapper = styled.div.attrs({
  className: 'Projects',
})`
  display: flex;
  flex-flow: column;
  height: 100%;
  > h1 {
    text-shadow: 2px 2px 4px gray;
  }
`;

const Projects = () => {
  return (
    <ContactWrapper>
      <h1>What I'm Working On</h1>
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
        title="Gokey Locksmiths"
        body="Rebuild of an outdated Adobe Muse site. Using a custom Wordpress template to help be more responsive and to better gather data."
      />
      <InfoCard
        title="Devs who Shred"
        body="Meetup idea for developers who shred the gnar gnar. Check back soon for more info!"
      />
      <InfoCard
        title="Security"
        body="A personal home security system I'm building with a Raspberry Pi and powered by Python and Aws."
      />
    </ContactWrapper>
  );
};

export default Projects;
