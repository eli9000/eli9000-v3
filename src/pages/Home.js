import React from 'react';
import PageWrapper from '../containers/PageWrapper';
import Banner from '../containers/Banner';

/* ***************************************************************** */

const Home = () => {
  return (
    <PageWrapper>
      <Banner>
        <div style={{ width: '100%', height: '100%' }}>
          <h1
            style={{
              textAlign: 'left',
              fontSize: '5rem',
              color: 'white',
              textShadow: '3px 3px 3px red',
            }}
          >
            Howzit!?
          </h1>
        </div>
      </Banner>
      <h1>
        Welcome to my GeoCities throwback page!<br />
        <img src="./images/uc.gif" style={{ maxWidth: '50%' }} />
      </h1>
      <h2 style={{ textAlign: 'center', margin: '0px' }}>
        This site was built using:
      </h2>
      <ul
        style={{ textAlign: 'center', listStyleType: 'none', padding: '0px' }}
      >
        <li>React</li>
        <li>AWS Serverless</li>
        <li>GraphQL</li>
        <li>Styled-Components</li>
        <li>Node JS (dev server)</li>
      </ul>
      <p
        style={{
          textAlign: 'center',
          borderTop: '1px solid black',
          paddingTop: '10px',
        }}
      >
        <em>Side note: </em>No component library was used as I wanted to further
        my understanding of modular coding, styled-components, code-splitting,
        conditional rendering, etc. Still got a few kinks to work out and I may
        end up importing and using a component library at some point. But until
        then I am continually making improvements and learning new stuff
        everyday!
      </p>
    </PageWrapper>
  );
};

export default Home;
