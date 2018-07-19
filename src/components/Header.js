import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* ***************************************************************** */

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--black);
  border-bottom: 1px solid gray;
`;

/* ***************************************************************** */

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <i className="fas fa-home fa-2x" />
          <code>&nbsp; Eli Johnson's Personal Website</code>
        </Link>
        {/* <i className="fas fa-bars fa-2x" /> */}
      </HeaderWrapper>
    );
  }
}

export default Header;
