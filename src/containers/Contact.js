import React from 'react';
import styled from 'styled-components';

/* ***************************************************************** */

const ContactWrapper = styled.div.attrs({
  className: 'Contact',
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

const Contact = () => {
  return (
    <ContactWrapper>
      <h1>Contact A Ninja</h1>
    </ContactWrapper>
  );
};

export default Contact;
