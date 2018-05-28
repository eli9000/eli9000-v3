import React from 'react';
import styled from 'styled-components';

import InfoCard from '../components/Cards/InfoCard';

/* ***************************************************************** */

const ContactWrapper = styled.div.attrs({
  className: 'Projects',
})`
  dislpay: flex;
  height: 100%;
  > h1 {
    margin: 10px;
    text-align: center;
  }
`;

const Projects = () => {
  return (
    <ContactWrapper>
      <h1>What I'm working on</h1>
      <InfoCard
        title="801-code"
        body="Elit do officia labore nulla et reprehenderit cupidatat sunt elit Lorem sint velit commodo. Minim reprehenderit eiusmod dolor Lorem officia officia pariatur amet ad ea laborum elit. Lorem anim non veniam elit cupidatat laborum sint minim minim consequat id. Non dolor sunt est nisi."
      />
      <InfoCard
        title="Homewise"
        body="Eu qui fugiat mollit sunt voluptate nostrud duis nulla reprehenderit. Irure ullamco labore proident deserunt ipsum. Ut velit ut labore occaecat velit aute enim minim nisi. Ullamco voluptate labore minim tempor quis duis. Labore consectetur esse ad reprehenderit irure ullamco sint."
      />
      <InfoCard
        title="Gokey Locksmiths"
        body="Aliquip cupidatat et consequat culpa eiusmod nisi. Officia proident Lorem quis eu adipisicing. Consectetur consequat eu veniam exercitation id exercitation incididunt nostrud aute et magna deserunt. Laborum minim officia irure culpa ex non qui. Sunt in duis consequat ipsum nisi nisi velit pariatur consequat. In nulla laborum commodo non eu aliqua laborum in qui consectetur. Reprehenderit elit ea culpa tempor officia nostrud dolor minim magna sit consequat."
      />
    </ContactWrapper>
  );
};

export default Projects;
