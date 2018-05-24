import React from 'react';
import styled from 'styled-components';

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
    </ContactWrapper>
  );
};

export default Projects;
