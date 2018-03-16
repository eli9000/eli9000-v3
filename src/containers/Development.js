import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import Container from '../../components/Container';
import Card from '../../components/Card';
import CardTitle from '../../components/CardTitle';
import CardBody from '../../components/CardBody';

const query = gql`
  query skills {
    skills {
      id
      name
      rating
      desc
    }
  }
`;

const Development = ({ data: { loading, error, skills } }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    // console.log(this.props.data.error)
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      {skills.map((skill) => (
        <Card key={skill.id} padding="20px">
          <CardTitle>{skill.name}</CardTitle>
          <CardBody>{skill.desc}</CardBody>
        </Card>
      ))}
    </Container>
  );
};

Development.propTypes = {
  data: PropTypes.any.isRequired,
};

export default graphql(query)(Development);
