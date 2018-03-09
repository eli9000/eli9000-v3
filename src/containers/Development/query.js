import gql from 'graphql-tag';

export const query = gql`
  query skills {
    skills {
      id
      name
      rating
      desc
    }
  }
`;

export const options = {
  options: {

  }
}
