import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  margin: auto;
  width: 600px;
  max-width: 100%;
  text-align: left;
  background-color: #ff0000;
  border-radius: 2px;
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);
`;

const Header = styled.h3`
  display: flex;
  justify-content: center;
  text-align: center;
`;

function Skill({ skill }) {
  return (
    <Div>
      <Container>
        {skill.map((skill) => (
          <div key={skill.id}>
            <Header>{skill.name}</Header>
            <p>{skill.desc}</p>
          </div>
        ))}
      </Container>
    </Div>
  );
}

Skill.propTypes = {
  skill: PropTypes.any.isRequired,
};

export default Skill;
