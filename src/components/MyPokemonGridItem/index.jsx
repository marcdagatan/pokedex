import React from 'react';
import PropTypes from 'prop-types';

import { pokemonPropTypes } from '../../propTypes';

import { Container, Img, Name, SlotNumber } from './components';

const MyPokemonGridItem = ({ pokemon, slot, setFocusedMyPokemon, isFocused }) => (
  <Container
    onClick={() => pokemon && (isFocused ? setFocusedMyPokemon() : setFocusedMyPokemon(slot, pokemon))}
    isFocused={isFocused}
  >
    {pokemon ? (
      <>
        <Name>{pokemon.name}</Name>
        <Img src={pokemon.sprites.frontDefault} alt={pokemon.name} />
      </>
    ) : (
      <SlotNumber>{slot}</SlotNumber>
    )}
  </Container>
);

MyPokemonGridItem.defaultProps = {
  pokemon: null,
  isFocused: false,
};

MyPokemonGridItem.propTypes = {
  pokemon: pokemonPropTypes,
  slot: PropTypes.number.isRequired,
  setFocusedMyPokemon: PropTypes.func.isRequired,
  isFocused: PropTypes.bool,
};

export default MyPokemonGridItem;
