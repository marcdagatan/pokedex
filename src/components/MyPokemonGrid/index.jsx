import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import _ from 'lodash/fp';

import MyPokemonGridItem from '../MyPokemonGridItem';
import { pokemonPropTypes } from '../../propTypes';
import pokemonSlots from '../../static/pokemonSlots';
import styles from './styles';

const MyPokemonGrid = ({ myPokemon, setFocusedMyPokemon, focused }) => {
  const classes = styles();

  return (
    <Grid container className={classes.root}>
      {_.map(
        slot => (
          <Grid item xs={6} md={4}>
            <MyPokemonGridItem
              pokemon={myPokemon[slot]}
              slot={slot}
              setFocusedMyPokemon={setFocusedMyPokemon}
              isFocused={slot === focused}
            />
          </Grid>
        ),
        pokemonSlots,
      )}
    </Grid>
  );
};

MyPokemonGrid.defaultProps = {
  focused: 0,
};

MyPokemonGrid.propTypes = {
  myPokemon: pokemonPropTypes.isRequired,
  setFocusedMyPokemon: PropTypes.func.isRequired,
  focused: PropTypes.number,
};

export default MyPokemonGrid;
