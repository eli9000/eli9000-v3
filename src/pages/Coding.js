import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import PageWrapper from '../containers/PageWrapper';
import SkillCard from '../components/Cards/SkillCard/SkillCard';

/* ***************************************************************** */

const query = gql`
  query skills {
    skills {
      id
      name
      rating
      desc
      fa
      color
    }
  }
`;

/* ***************************************************************** */

const Coding = ({ data: { loading, error, skills = [] } }) => {
  if (loading) {
    return <p>Pulling from AWS RDS datastore via GraphQL API layer...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <PageWrapper>
      <h1>Code Skills</h1>
      <br />
      {skills.map(skill => <SkillCard key={skill.id} {...skill} />)}
    </PageWrapper>
  );
};

export default graphql(query)(Coding);
