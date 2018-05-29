import React from 'react';
import styled from 'styled-components';

import InfoCard from '../components/Cards/InfoCard';

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
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Howdy.</h1>
      <img
        src="images/utes-pano.jpg"
        alt="pano-ish"
        width="980"
        height="auto"
      />
        <InfoCard title="On matters of this website..." body="Duis ad aliqua Lorem exercitation proident eu commodo ad laborum ut id. Eu reprehenderit dolor eiusmod proident qui enim occaecat in sunt veniam sunt ea. Minim sit reprehenderit velit pariatur dolor nisi velit voluptate nostrud." />
    </HomeWrapper>
  );
};

export default Home;
