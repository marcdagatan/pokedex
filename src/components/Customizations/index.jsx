import React from 'react';
import PropTypes from 'prop-types';

import { Container, NoPokemon, Name } from './components';
import { pokemonPropTypes } from '../../propTypes';

const Customizations = ({ pokemon, setFocusedMyPokemonNickname }) => (
  <Container>
    {pokemon ? (
      <Name name={pokemon.name} nickname={pokemon.nickname} setNickname={setFocusedMyPokemonNickname} />
    ) : (
      <NoPokemon />
    )}
  </Container>
);

Customizations.defaultProps = {
  pokemon: null,
};

Customizations.propTypes = {
  pokemon: pokemonPropTypes,
  setFocusedMyPokemonNickname: PropTypes.func.isRequired,
};

export default Customizations;
