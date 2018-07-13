import React from 'react';
// import styled from 'styled-components';

import PageWrapper from '../containers/PageWrapper';
import PicCard from '../components/Cards/PicCard';

/* ***************************************************************** */

const About = () => {
  return (
    <PageWrapper>
      <h1>About this guy</h1>
      <br />
      <PicCard
        title="Favs"
        body={
          <section>
            <p>Movie: Big Lebowski</p>
          </section>
        }
        image="images/walter.gif"
      />
      <PicCard
        title="Current and Future"
        body={
          <section>
            <p>
              Currently: Ex-Teacher<br />
              Future: Dev McWizzy
            </p>
          </section>
        }
        image="images/glasses.png"
      />
      <PicCard
        title="Education"
        body={
          <section>
            <p>
              University of Utah<br />
              B.S. in Mathematics
            </p>
          </section>
        }
        image="images/utes.png"
      />
    </PageWrapper>
  );
};

export default About;
