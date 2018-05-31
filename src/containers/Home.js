import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const HomeWrapper = styled.div.attrs({
  className: 'Home',
})`
  dislpay: flex;
  height: 100%;
  > h1 {
    margin: 10px;
    text-align: center;
  }
  > img {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }
  > section {
    padding: 0 10px;
  }
`;

/* ***************************************************************** */

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to V4.0!</h1>
      <img
        src="images/utes-pano.jpg"
        alt="pano-ish"
        width="980"
        height="auto"
      />
      <section>
        <h2>I know it's ugly, but hear me out...</h2>
        <p>
          The purpose of this site is obviously NOT to show off my design skills
          but rather to demonstrate a working knowledge of various frameworks,
          libraries, packages, etc.
        </p>
        <p>
          Built from scratch using React, GraphQL, AWS RDS for database, Node.js
          for development backend and Serverless AWS production backend.
        </p>
      </section>
    </HomeWrapper>
  );
};

export default Home;
