import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

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

const ContactCard = ({ id, type, info, link }) => {
  return (
    <div>
      {type}: {info}, <a href={link}>Click Here</a>
    </div>
  );
};

/* ***************************************************************** */

const query = gql`
  query contacts {
    contacts {
      id
      type
      info
      link
    }
  }
`;

/* ***************************************************************** */

const Contact = ({ data: { loading, error, contacts = [] } }) => {
  if (loading) {
    return <p>Loading...</p>;
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
