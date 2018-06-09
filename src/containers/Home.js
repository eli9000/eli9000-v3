import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const HomeWrapper = styled.div.attrs({
  className: 'Home',
})`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  > h1 {
    margin: 10px;
    text-align: center;
  }
  > .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      max-width: 100%;
      height: auto;
      /* prettier-ignore */
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0 3px 5px -1px rgba(0, 0, 0, 0.3);
    }
  }
  > section {
    padding: 1em 3em;
  }
`;

/* ***************************************************************** */

const Home = () => {
  return (
    <HomeWrapper>
      <div className="banner">
        <img
          src="images/utes-pano.jpg"
          alt="pano-ish"
          width="100%"
          height="auto"
        />
      </div>
      <section>
        <h1>I know it's ugly, but hear me out...</h1>
        <hr />
        <p>
          Instead of using a component library, I decided to build my own. Not
          to reinvent the wheel, but to better aquaint myself with
          styled-components(link) and flexbox(link). The meager library of
          components I've assembled will suffice for now. I'm working on
          code-splitting for better reusability and adhearance to the DRY rule.
        </p>
        <hr />
        <h1>
          The purpose of this site is to show an understanding of the following:
        </h1>
        <ul>
          <li>Data acquisition, management and manipulation</li>
          <li>Ability to build reusable and functional components</li>
          <li>Demonstrate good code practices</li>
        </ul>
        <p>
          Built from scratch using React, GraphQL, AWS RDS for database, Node.js
          for development backend and Serverless AWS production backend. Styled,
          if that's what you want to call it, with Styled-Components and
          Flexbox.
        </p>
        <p>
          That which I most can't the least is to do never a bad job, but always
          a good.
        </p>
        <p>
          This is a complicated site man... lot of ins, lot of outs, lot of
          what-have-yous. Lot of strands to keep in ol' duders head.
        </p>
      </section>
    </HomeWrapper>
  );
};

export default Home;
