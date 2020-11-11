import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';

import { Pokedex } from '../components';
import { fetchPokemon, fetchAPokemon, clearFocusedPokemon, selectPokemon } from '../actions';
import { pokemonPropTypes } from '../propTypes';

class PokedexContainer extends Component {
  componentDidMount = () => this.props.fetch();

  render = () => (
    <Pokedex
      pokemon={this.props.pokemon}
      focusedPokemon={this.props.focusedPokemon}
      fetchAPokemon={this.props.fetchSingle}
      fetchPokemon={() => this.props.fetch(100, _.size(this.props.pokemon))}
      fetchingPokemon={this.props.fetchingPokemon}
      fetchingAPokemon={this.props.fetchingAPokemon}
      clearFocusedPokemon={this.props.clear}
      selectPokemon={this.props.select}
      myPokemon={this.props.myPokemon}
    />
  );
}

PokedexContainer.propTypes = {
  fetch: PropTypes.func.isRequired,
  fetchSingle: PropTypes.func.isRequired,
  pokemon: pokemonPropTypes.isRequired,
  focusedPokemon: pokemonPropTypes.isRequired,
  fetchingPokemon: PropTypes.bool.isRequired,
  fetchingAPokemon: PropTypes.bool.isRequired,
  clear: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
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

const mapActionsToProps = {
  fetch: fetchPokemon,
  fetchSingle: fetchAPokemon,
  clear: clearFocusedPokemon,
  select: selectPokemon,
};

export default connect(mapStateToProps, mapActionsToProps)(PokedexContainer);
