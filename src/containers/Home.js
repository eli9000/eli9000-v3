import React from 'react';
import styled from 'styled-components';

// import Card from '../components/Card';

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
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome traveler!</h1>
      <img
        src="images/utes-pano.jpg"
        alt="pano-ish"
        width="980"
        height="auto"
      />
    </HomeWrapper>
  );
};

export default Home;
