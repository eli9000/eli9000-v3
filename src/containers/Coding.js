import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

/* ***************************************************************** */

import SkillCard from '../components/SkillCard/SkillCard';

/* ***************************************************************** */

const CodingWrapper = styled.div.attrs({
  className: 'Coding',
})`
  dislpay: flex;
  > h1 {
    margin: 10px;
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
    return <p>So many skills, so little time...</p>;
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
