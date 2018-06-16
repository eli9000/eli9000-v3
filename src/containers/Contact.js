import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import ContactCard from '../components/Cards/ContactCard';

/* ***************************************************************** */

const ContactWrapper = styled.div.attrs({
  className: 'Contact',
})`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  > h1 {
    margin: 10px;
    padding-top: 10px;
    text-align: center;
  }

  > .contacts {
    > a {
      text-decoration: none;
    }
    > a:visited {
      color: black;
    }
    > a:link {
      color: black;
    }
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
    return <p>Gettin that info...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ContactWrapper>
      <h1>Contact and Social</h1>
      <br />
      <div className="contacts">
        {' '}
        {contacts.map(contact => <ContactCard key={contact.id} {...contact} />)}
      </div>
    </ContactWrapper>
  );
};

export default graphql(query)(Contact);
