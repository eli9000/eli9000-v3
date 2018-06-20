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
    text-shadow: 2px 2px 4px gray;
  }
  > .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;

    > .img {
      background-color: var(--background-color);
      background-image: url('/images/utes-pano.jpg');
      background-position: center;
      background-size: cover;
      height: 200px;
      width: 100%;
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
      <h1>Welcome to eli9000.com v4.0!</h1>
      <div className="banner">
        <div className="img" />
      </div>
      <section>
        <h2>I know it's ugly, but hear me out...</h2>
        <hr />
        <p>
          Instead of using a component library, I decided to build my own. Not
          to reinvent the wheel, but to better aquaint myself with
          styled-components, flexbox, code-splitting, etc. The meager library of
          components I've assembled will suffice for now. I'm working on better
          reusability, global-styles, and adhearance to the DRY rule.
        </p>
        <p>
          Overall, I'm proud of what I've accomplished so far. It's not perfect,
          and it's certainly not a showpiece for my design prowess, too
          left-brained I suppose. But that's ok, it's what's under the hood that
          counts for this project.
        </p>
        <hr />
        <h2>
          The purpose of this site is to show an understanding of the following:
        </h2>
        <ul>
          <li>
            Using React on the front-end to build reusable, dynamic, and styled
            components.
          </li>
          <li>
            Aquiring, managing, and manipulating data using GraphQL's API layer
            and Postgres RDS for datastore.
          </li>
          <li>Deployed AWS Serverless architecture on the back-end.</li>
          <li>Using Node.js to build a working dev environment back-end</li>
        </ul>
        <hr />
        <p>
          This is a very complicated site, man. You know, a lotta ins, a lotta
          outs, a lotta what-have-yous. And, uh, a lotta strands to keep in my
          head, man. Lotta strands in ol' Duders head.
        </p>
      </section>
    </HomeWrapper>
  );
};

export default Home;
