import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { pokemonPropTypes } from '../propTypes';
import { MyPokemonGrid } from '../components';
import { setFocusedMyPokemon } from '../actions';

const MyPokemonGridContainer = props => (
  <MyPokemonGrid
    myPokemon={props.myPokemon}
    setFocusedMyPokemon={props.setFocusedMyPokemon}
    focusedSlot={props.focusedSlot}
  />
);

MyPokemonGridContainer.defaultProps = {
  focusedSlot: null,
};

MyPokemonGridContainer.propTypes = {
  myPokemon: pokemonPropTypes.isRequired,
  setFocusedMyPokemon: PropTypes.func.isRequired,
  focusedSlot: PropTypes.number,
};

const mapStateToProps = ({
  myPokemon: {
    myPokemon,
    focused: { slotNumber },
  },
}) => ({ myPokemon, focusedSlot: slotNumber });

const mapActionsToProps = { setFocusedMyPokemon };

export default connect(mapStateToProps, mapActionsToProps)(MyPokemonGridContainer);
