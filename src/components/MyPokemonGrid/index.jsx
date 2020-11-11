import React from 'react';
import { Grid } from '@material-ui/core';
import _ from 'lodash/fp';

import MyPokemonGridItem from '../MyPokemonGridItem';
import { pokemonPropTypes } from '../../propTypes';
import pokemonSlots from '../../static/pokemonSlots';
import styles from './styles';

const MyPokemonGrid = ({ myPokemon }) => {
  const classes = styles();

  return (
    <Grid container className={classes.root}>
      {_.map(
        slot => (
          <Grid item xs={6} md={4}>
            <MyPokemonGridItem pokemon={myPokemon[slot]} slot={slot} />
          </Grid>
        ),
        pokemonSlots,
      )}
    </Grid>
  );
};

MyPokemonGrid.propTypes = {
  myPokemon: pokemonPropTypes.isRequired,
};

export default MyPokemonGrid;
