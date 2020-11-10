import React from 'react';
import { pokemonPropTypes } from '../../propTypes';

import { HeroImage, Stats } from './components';

const Pokemon = ({ pokemon: { stats, ...pokemon } }) => (
  <>
    <HeroImage url={pokemon.sprites.frontDefault} />
    <h2>{pokemon.name}</h2>
    <Stats stats={stats} />
  </>
);
Pokemon.propTypes = {
  pokemon: pokemonPropTypes.isRequired,
};

export default Pokemon;
