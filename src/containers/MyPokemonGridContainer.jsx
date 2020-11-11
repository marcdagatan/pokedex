import React from 'react';
import { connect } from 'react-redux';

import { pokemonPropTypes } from '../propTypes';
import { MyPokemonGrid } from '../components';

const MyPokemonGridContainer = ({ myPokemon }) => <MyPokemonGrid myPokemon={myPokemon} />;

MyPokemonGridContainer.propTypes = {
  myPokemon: pokemonPropTypes.isRequired,
};

const mapStateToProps = ({ myPokemon: { myPokemon } }) => ({ myPokemon });

export default connect(mapStateToProps)(MyPokemonGridContainer);
