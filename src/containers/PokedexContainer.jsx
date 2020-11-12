import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';

import { Pokedex } from '../components';
import { fetchPokemon, fetchAPokemon, clearFocusedPokemon, selectPokemon } from '../actions';
import { pokemonPropTypes } from '../propTypes';

const PokedexContainer = props => {
  useEffect(() => {
    props.fetchPokemon();
  }, []);

  return (
    <Pokedex
      pokemon={props.pokemon}
      focusedPokemon={props.focusedPokemon}
      fetchAPokemon={props.fetchAPokemon}
      fetchPokemon={() => props.fetchPokemon(100, _.size(props.pokemon))}
      fetchingPokemon={props.fetchingPokemon}
      fetchingAPokemon={props.fetchingAPokemon}
      clearFocusedPokemon={props.clearFocusedPokemon}
      selectPokemon={props.selectPokemon}
      myPokemon={props.myPokemon}
    />
  );
};

PokedexContainer.propTypes = {
  fetchPokemon: PropTypes.func.isRequired,
  fetchAPokemon: PropTypes.func.isRequired,
  pokemon: pokemonPropTypes.isRequired,
  focusedPokemon: pokemonPropTypes.isRequired,
  fetchingPokemon: PropTypes.bool.isRequired,
  fetchingAPokemon: PropTypes.bool.isRequired,
  clearFocusedPokemon: PropTypes.func.isRequired,
  selectPokemon: PropTypes.func.isRequired,
  myPokemon: pokemonPropTypes.isRequired,
};

const mapStateToProps = ({
  pokedex: { pokemon, fetchingPokemon, fetchingAPokemon, focusedPokemon },
  myPokemon: { myPokemon },
}) => ({
  pokemon,
  focusedPokemon,
  fetchingPokemon,
  fetchingAPokemon,
  myPokemon,
});

const mapActionsToProps = { fetchPokemon, fetchAPokemon, clearFocusedPokemon, selectPokemon };

export default connect(mapStateToProps, mapActionsToProps)(PokedexContainer);
