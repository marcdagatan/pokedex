import React from 'react';
import PropTypes from 'prop-types';

import { pokemonPropTypes } from '../../propTypes';

import { Container, Img, Name, SlotNumber } from './components';

const MyPokemonGridItem = ({ pokemon, slot }) => (
  <Container>
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
};

MyPokemonGridItem.propTypes = {
  pokemon: pokemonPropTypes,
  slot: PropTypes.number.isRequired,
};

export default MyPokemonGridItem;
