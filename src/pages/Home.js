import React from 'react';
import PageWrapper from '../containers/PageWrapper';
import Banner from '../containers/Banner';

/* ***************************************************************** */

const Home = () => {
  return (
    <PageWrapper>
      <Banner />
      <h1>Howzit!? Welcome...</h1>
      <h1 style={{ margin: '0px', textDecoration: 'underline' }}>
        Site built using:
      </h1>
      <ul
        style={{ textAlign: 'center', listStyleType: 'none', padding: '0px' }}
      >
        <li>React</li>
        <li>AWS Serverless</li>
        <li>GraphQL</li>
        <li>Node JS (dev server)</li>
      </ul>
      <p style={{ textAlign: 'center' }}>
        Please note this site is currently...
        <br />
        <img src="./images/uc.gif" style={{ maxWidth: '90vw' }} />
        <br />
        Never forget GEOCITIES!!!
      </p>
    </PageWrapper>
  );
};

export default Home;
