import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: auto;
`;

const Rating = ({ rating = 0 }) => {
  return (
    <Wrapper>
      {Array(rating)
        .fill('')
        .map((r, i) => (
          <i
            key={`${i}-${r}`}
            className="fas fa-star"
            style={{ color: 'yellow' }}
          />
        ))}
    </Wrapper>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
