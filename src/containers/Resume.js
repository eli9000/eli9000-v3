import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const ResumeWrapper = styled.div.attrs({
  className: 'Resume',
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

const Resume = () => {
  return (
    <ResumeWrapper>
      <h1>Resume Pageeee</h1>
    </ResumeWrapper>
  );
};

export default Resume;
