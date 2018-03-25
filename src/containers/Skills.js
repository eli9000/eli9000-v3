import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import SkillCard from '../components/SkillCard';

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

const Skills = ({ data: { loading, error, skills = [] } }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    // console.log(this.props.data.error)
    return <p>{error.message}</p>;
  }

  return (
    <div>{skills.map(skill => <SkillCard key={skill.id} {...skill} />)}</div>
  );
};

Skills.propTypes = {
  data: PropTypes.any.isRequired,
};

export default graphql(query)(Skills);
