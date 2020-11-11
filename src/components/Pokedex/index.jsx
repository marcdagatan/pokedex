import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import _ from 'lodash/fp';

import PokedexList from '../PokedexList';
import Pokemon from '../Pokemon';
import { pokemonPropTypes } from '../../propTypes';
import styles from './styles';

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
  const classes = styles();

  const pokedexGridWidth = width => (hasFocusedPokemon ? width : 12);

  const focusedWidth = width => (hasFocusedPokemon ? width : 0);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h2">Pokedex</Typography>
      </Grid>
      <Grid item xs={pokedexGridWidth(5)} lg={pokedexGridWidth(4)} xl={pokedexGridWidth(3)} className={classes.panel}>
        <PokedexList
          pokemon={pokemon}
          fetchingPokemon={fetchingPokemon}
          fetchingAPokemon={fetchingAPokemon}
          fetchAPokemon={fetchAPokemon}
          fetchPokemon={fetchPokemon}
        />
      </Grid>
      {hasFocusedPokemon && (
        <Grid item xs={focusedWidth(7)} lg={focusedWidth(8)} xl={focusedWidth(9)}>
          <Pokemon
            pokemon={focusedPokemon}
            clearFocusedPokemon={clearFocusedPokemon}
            selectPokemon={selectPokemon}
            myPokemon={myPokemon}
          />
        </Grid>
      )}
    </Grid>
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
