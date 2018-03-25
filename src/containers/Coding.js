import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import SkillCard from '../components/SkillCard';

/* ***************************************************************** */

const CodingWrapper = styled.div.attrs({
  className: 'Coding',
})`
  dislpay: flex;
  flex: 1 100%;
  justify-content: center;
  max-height: 60vh;
  min-height: 60vh;
  overflow: scroll;
  > h1 {
    margin: 0;
    text-align: center;
  }
`;

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
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <CodingWrapper>
      <h1>Coding Ish</h1>
      {skills.map(skill => <SkillCard key={skill.id} {...skill} />)}
    </CodingWrapper>
  );
};

export default graphql(query)(Coding);
