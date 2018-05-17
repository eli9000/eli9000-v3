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
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Homey Home Evening!</h1>
    </HomeWrapper>
  );
};

export default Home;
