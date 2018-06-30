import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import SkillCard from '../components/Cards/SkillCard/SkillCard';

/* ***************************************************************** */

const CodingWrapper = styled.div.attrs({
  className: 'Coding',
})`
  display: flex;
  flex-flow: column nowrap;
  > h1 {
    text-shadow: 2px 2px 4px gray;
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
    return <p>So many skills, so little time...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <CodingWrapper>
      <h1>Code Skills</h1>
      <br />
      {skills.map(skill => <SkillCard key={skill.id} {...skill} />)}
    </CodingWrapper>
  );
};

export default graphql(query)(Coding);