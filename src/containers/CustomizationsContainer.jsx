import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Customizations } from '../components';
import { setFocusedMyPokemonNickname } from '../actions';
import { pokemonPropTypes } from '../propTypes';

const CustomizationsContainer = props => (
  <Customizations pokemon={props.pokemon} setFocusedMyPokemonNickname={props.setFocusedMyPokemonNickname} />
);

CustomizationsContainer.defaultProps = {
  pokemon: null,
};

CustomizationsContainer.propTypes = {
  pokemon: pokemonPropTypes,
  setFocusedMyPokemonNickname: PropTypes.func.isRequired,
};

const mapStateToProps = ({ myPokemon: { myPokemon, focused } }) => ({ pokemon: myPokemon[focused] });

const mapActionsToProps = { setFocusedMyPokemonNickname };

export default connect(mapStateToProps, mapActionsToProps)(CustomizationsContainer);
