import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import _ from 'lodash/fp';

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
            {myPokemon[slot] ? myPokemon[slot].name : <Avatar>{slot}</Avatar>}
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
