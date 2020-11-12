import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';

import { Pokedex } from '../components';
import { fetchPokemon, fetchAPokemon, clearFocusedPokemon, selectPokemon } from '../actions';
import { pokemonPropTypes } from '../propTypes';

class PokedexContainer extends Component {
  componentDidMount = () => this.props.fetchPokemon();

  render = () => (
    <Pokedex
      pokemon={this.props.pokemon}
      focusedPokemon={this.props.focusedPokemon}
      fetchAPokemon={this.props.fetchAPokemon}
      fetchPokemon={() => this.props.fetchPokemon(100, _.size(this.props.pokemon))}
      fetchingPokemon={this.props.fetchingPokemon}
      fetchingAPokemon={this.props.fetchingAPokemon}
      clearFocusedPokemon={this.props.clearFocusedPokemon}
      selectPokemon={this.props.selectPokemon}
      myPokemon={this.props.myPokemon}
    />
  );
}

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
