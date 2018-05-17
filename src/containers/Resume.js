import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const ResumeWrapper = styled.div.attrs({
  className: 'Resume',
})`
  dislpay: flex;
  height: 100%;
  > h1 {
    margin: 10px;
    text-align: center;
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
