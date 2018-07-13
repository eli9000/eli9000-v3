import React from 'react';
import PageWrapper from '../containers/PageWrapper';
import Banner from '../containers/Banner';

/* ***************************************************************** */

const Home = () => {
  return (
    <PageWrapper>
      <Banner />
      <h1>Howzit! Welcome...</h1>
      <h1>Built with:</h1>
      <ul
        style={{ textAlign: 'center', listStyleType: 'none', padding: '0px' }}
      >
        <li>React</li>
        <li>Node JS</li>
        <li>AWS Serverless</li>
        <li>GraphQL</li>
      </ul>
      <p style={{ textAlign: 'center' }}>
        Please keep in mind this is a work in progress and is being continually
        upgraded.
      </p>
    </PageWrapper>
  );
};

export default Home;
