import React from 'react';
import PropTypes from 'prop-types';

import PokedexList from '../PokedexList';
import { pokemonPropTypes } from '../../propTypes';

const Pokedex = ({ pokemon, fetchAPokemon, fetchingPokemon, fetchingAPokemon, fetchPokemon }) => (
  <PokedexList
    pokemon={pokemon}
    fetchingPokemon={fetchingPokemon}
    fetchingAPokemon={fetchingAPokemon}
    fetchAPokemon={fetchAPokemon}
    fetchPokemon={fetchPokemon}
  />
);

Pokedex.propTypes = {
  pokemon: pokemonPropTypes.isRequired,
  fetchAPokemon: PropTypes.func.isRequired,
  fetchPokemon: PropTypes.func.isRequired,
  fetchingPokemon: PropTypes.bool.isRequired,
  fetchingAPokemon: PropTypes.bool.isRequired,
};

export default Pokedex;
