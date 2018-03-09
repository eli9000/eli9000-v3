import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Skill from './Skill';

const SkillsList = ({ data: { loading, error, skills } }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <Skill key={skills.name} skill={skills} />
    </div>
  );
};

SkillsList.propTypes = {
  data: PropTypes.any.isRequired,
};

export const SkillsQuery = gql`
  query skills {
    skills {
      id
      name
      desc
      rating
    }
  }
`;

export default graphql(SkillsQuery, {
  // options: (props) => ({
  //   variables: {
  //     id: props.id,
  //     name: props.name,
  //     desc: props.desc,
  //     rating: props.rating,
  //   },
  // }),
})(SkillsList);
