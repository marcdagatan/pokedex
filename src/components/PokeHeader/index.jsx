import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 140px;
  background-color: #555;
  overflow: hidden;
`;

const Img = styled.img`
  height: 200px;
  widht: auto;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translate(-50%);
`;

const PokeHeader = ({ url }) => (
  <Container>
    <Img src={url} />
  </Container>
);

PokeHeader.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PokeHeader;
