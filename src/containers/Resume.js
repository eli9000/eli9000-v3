import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const ResumeWrapper = styled.div.attrs({
  className: 'Resume',
})`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: scroll;
  > h1 {
    margin: 10px;
    padding-top: 10px;
    text-align: center;
  }
  > .res-link {
    padding: 2em;
  }
`;

const Resume = () => {
  return (
    <ResumeWrapper>
      <h1>Resume Link</h1>
      <div className="resumes">
        <img
          src="data/ejohnson-fullstack.png"
          alt="res"
          width="100%"
          height="auto"
        />
      </div>
    </ResumeWrapper>
  );
};

export default Resume;
