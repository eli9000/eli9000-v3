import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const ContactWrapper = styled.div.attrs({
  className: 'Projects',
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

const Projects = () => {
  return (
    <ContactWrapper>
      <h1>Here's what I'm working on</h1>
    </ContactWrapper>
  );
};

export default Projects;
