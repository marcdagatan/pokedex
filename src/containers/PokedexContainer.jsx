import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';

import { Pokedex } from '../components';
import { fetchPokemon, fetchAPokemon } from '../actions';
import { pokemonPropTypes } from '../propTypes';

class PokedexContainer extends Component {
  componentDidMount = () => this.props.fetch();

  render = () => (
    <Pokedex
      pokemon={this.props.pokemon}
      fetchAPokemon={this.props.fetchSingle}
      fetchPokemon={() => this.props.fetch(100, _.size(this.props.pokemon))}
      fetchingPokemon={this.props.fetchingPokemon}
      fetchingAPokemon={this.props.fetchingAPokemon}
    />
  );
}

PokedexContainer.propTypes = {
  fetch: PropTypes.func.isRequired,
  fetchSingle: PropTypes.func.isRequired,
  pokemon: pokemonPropTypes.isRequired,
  fetchingPokemon: PropTypes.bool.isRequired,
  fetchingAPokemon: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ pokedex: { pokemon, fetchingPokemon, fetchingAPokemon } }) => ({
  pokemon,
  fetchingPokemon,
  fetchingAPokemon,
});

const mapActionsToProps = { fetch: fetchPokemon, fetchSingle: fetchAPokemon };

export default connect(mapStateToProps, mapActionsToProps)(PokedexContainer);
