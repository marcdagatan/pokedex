import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { pokemonPropTypes } from '../../../propTypes';
import HeroImage from './HeroImage';
import SelectPokemon from './SelectPokemon';
import Stats from './Stats';

const Container = styled.div`
  position: relative;
`;

const Pokemon = ({ pokemon: { stats, ...pokemon }, clearFocusedPokemon, selectPokemon, myPokemon }) => (
  <Container>
    <div>
      <SelectPokemon selectPokemon={selectPokemon} myPokemon={myPokemon} pokemon={pokemon} />
      <Button onClick={clearFocusedPokemon} color="primary" variant="outlined">
        Clear
      </Button>
    </div>
    <HeroImage url={pokemon.sprites.frontDefault} />
    <h2>{pokemon.name}</h2>
    <Stats stats={stats} />
  </Container>
);
Pokemon.propTypes = {
  pokemon: pokemonPropTypes.isRequired,
  myPokemon: pokemonPropTypes.isRequired,
  clearFocusedPokemon: PropTypes.func.isRequired,
  selectPokemon: PropTypes.func.isRequired,
};

export default Pokemon;
