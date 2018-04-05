import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const HomeWrapper = styled.div.attrs({
  className: 'Home',
})`
  dislpay: flex;
  flex: 1 100%;
  justify-content: center;
  max-height: 60vh;
  min-height: 60vh;
  > h1 {
    margin: 0;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Homey Home Evening!</h1>
    </HomeWrapper>
  );
};

export default Home;
