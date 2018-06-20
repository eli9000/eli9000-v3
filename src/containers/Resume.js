import React from 'react';
import styled from 'styled-components';

import LinkCard from '../components/Cards/LinkCard';

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
    text-shadow: 2px 2px 4px gray;
  }
  > .resumes {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 100%;
    > a {
      text-decoration: none;
    }
    > a:visited {
      color: black;
    }
    > a:link {
      color: black;
    }
  }
`;

const Resume = () => {
  return (
    <ResumeWrapper>
      <h1>Resume</h1>
      <br />
      <div className="resumes">
        {/* <img
          src="data/ejohnson-fullstack.png"
          alt="res"
          width="100%"
          height="auto"
        /> */}
        <LinkCard
          name="View PDF"
          link="data/ejohnson-fullstack.pdf"
          fa="fas fa-file-pdf fa-4x"
          color="#333"
        />
        <LinkCard
          name="View as image"
          link="data/ejohnson-fullstack.png"
          fa="fas fa-file-image fa-4x"
          color="#333"
        />
        <LinkCard
          name="Download .docx"
          link="data/ejohnson-fullstack.docx"
          fa="fas fa-file-alt fa-4x"
          color="#333"
        />
        <LinkCard
          name="Link to Google Docs"
          link="https://docs.google.com/document/d/13eaJ4UZYmYovSs2khUGFWZW_cU2CndIT_ZswyOQYkw4/edit?usp=sharing"
          fa="fab fa-google-drive fa-4x"
          color="#333"
        />
      </div>
    </ResumeWrapper>
  );
};

export default Resume;
