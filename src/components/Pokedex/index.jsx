import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import _ from 'lodash/fp';

import PokedexList from './PokedexList';
import Pokemon from './Pokemon';
import { pokemonPropTypes } from '../../propTypes';
import { GridContainer, TitlePanel, PokedexListPanel, PokemonPanel } from './components';

const Pokedex = ({
  pokemon,
  fetchAPokemon,
  fetchingPokemon,
  fetchingAPokemon,
  fetchPokemon,
  focusedPokemon,
  clearFocusedPokemon,
  selectPokemon,
  myPokemon,
}) => {
  const hasFocusedPokemon = !_.isEmpty(focusedPokemon);
  const pokedexGridWidth = width => (hasFocusedPokemon ? width : 12);

  const focusedWidth = width => (hasFocusedPokemon ? width : 0);

  return (
    <GridContainer container>
      <TitlePanel item xs={12}>
        <Typography variant="h2">Pokedex</Typography>
      </TitlePanel>
      <PokedexListPanel item xs={pokedexGridWidth(5)} lg={pokedexGridWidth(4)} xl={pokedexGridWidth(3)}>
        <PokedexList
          pokemon={pokemon}
          fetchingPokemon={fetchingPokemon}
          fetchingAPokemon={fetchingAPokemon}
          fetchAPokemon={fetchAPokemon}
          fetchPokemon={fetchPokemon}
        />
      </PokedexListPanel>
      {hasFocusedPokemon && (
        <PokemonPanel item xs={focusedWidth(7)} lg={focusedWidth(8)} xl={focusedWidth(9)}>
          <Pokemon
            pokemon={focusedPokemon}
            clearFocusedPokemon={clearFocusedPokemon}
            selectPokemon={selectPokemon}
            myPokemon={myPokemon}
          />
        </PokemonPanel>
      )}
    </GridContainer>
  );
};

Pokedex.propTypes = {
  pokemon: pokemonPropTypes.isRequired,
  myPokemon: pokemonPropTypes.isRequired,
  fetchAPokemon: PropTypes.func.isRequired,
  fetchPokemon: PropTypes.func.isRequired,
  fetchingPokemon: PropTypes.bool.isRequired,
  fetchingAPokemon: PropTypes.bool.isRequired,
  focusedPokemon: pokemonPropTypes.isRequired,
  clearFocusedPokemon: PropTypes.func.isRequired,
  selectPokemon: PropTypes.func.isRequired,
};

export default Pokedex;
