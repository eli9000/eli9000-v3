import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import ContactCard from '../components/Cards/ContactCard';

/* ***************************************************************** */

const ContactWrapper = styled.div.attrs({
  className: 'Contact',
})`
  dislpay: flex;
  height: 100%;
  > h1 {
    margin: 10px;
    text-align: center;
  }
`;

/* ***************************************************************** */

const query = gql`
  query contacts {
    contacts {
      id
      name
      info
      link
      fa
      color
    }
  }
`;

/* ***************************************************************** */

const Contact = ({ data: { loading, error, contacts = [] } }) => {
  if (loading) {
    return <p>Gettin that info so you can get at meh...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ContactWrapper>
      <h1>Contact A Ninja</h1>
      {contacts.map(contact => <ContactCard key={contact.id} {...contact} />)}
    </ContactWrapper>
  );
};

export default graphql(query)(Contact);
