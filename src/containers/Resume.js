import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const ResumeWrapper = styled.div.attrs({
  className: 'Resume',
})`
  dislpay: flex;
  height: 100%;
  overflow: scroll;
  > h1 {
    margin: 10px;
    text-align: center;
  }
  > img {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }
`;

const Resume = () => {
  return (
    <ResumeWrapper>
      <h1>Resume Pageeee</h1>
      <img src="data/full-stack-resume.png" alt="resume" width="980" />
    </ResumeWrapper>
  );
};

export default Resume;
