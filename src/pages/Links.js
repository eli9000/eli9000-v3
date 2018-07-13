import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import PageWrapper from '../containers/PageWrapper';
import LinkCard from '../components/Cards/LinkCard';

/* ***************************************************************** */

const LinksWrapper = PageWrapper.extend`
  > .links {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
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

const Links = ({ data: { loading, error, contacts = [] } }) => {
  if (loading) {
    return <p>Gettin that info...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <LinksWrapper>
      <h1>Social and Code Links</h1>
      <br />
      <div className="links">
        {contacts.map(contact => <LinkCard key={contact.id} {...contact} />)}
      </div>
    </LinksWrapper>
  );
};

export default graphql(query)(Links);
