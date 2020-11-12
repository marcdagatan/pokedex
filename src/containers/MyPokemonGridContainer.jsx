import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { pokemonPropTypes } from '../propTypes';
import { MyPokemonGrid } from '../components';
import { setFocusedMyPokemon } from '../actions';

const MyPokemonGridContainer = props => (
  <MyPokemonGrid myPokemon={props.myPokemon} setFocusedMyPokemon={props.setFocusedMyPokemon} focused={props.focused} />
);

MyPokemonGridContainer.defaultProps = {
  focused: null,
};

MyPokemonGridContainer.propTypes = {
  myPokemon: pokemonPropTypes.isRequired,
  setFocusedMyPokemon: PropTypes.func.isRequired,
  focused: PropTypes.number,
};

const mapStateToProps = ({ myPokemon: { myPokemon, focused } }) => ({ myPokemon, focused });

const mapActionsToProps = { setFocusedMyPokemon };

export default connect(mapStateToProps, mapActionsToProps)(MyPokemonGridContainer);
