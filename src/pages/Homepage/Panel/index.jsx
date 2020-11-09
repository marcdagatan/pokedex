import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: 50%;
`;

const TitleContainer = styled.div`
  padding: 1rem;
  background: #333;
  color: #fff;
  width: 100%;
  font-weight: 700;
  text-align: center;
`;

const Panel = ({ children, title }) => (
  <Container>
    <TitleContainer>{title}</TitleContainer>
    {children}
  </Container>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Panel;
