import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default () => (
  <Text>
    <h2>Customize your Pokemon!</h2>
    <p>Add a Pokemon from the Pokedex to MyPokemon</p>
    <p>Click on a Pokemon to customize!</p>
  </Text>
);
