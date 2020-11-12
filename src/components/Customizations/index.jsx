import React from 'react';

import { Container, NoPokemon } from './components';
import { pokemonPropTypes } from '../../propTypes';

const Customizations = ({ pokemon }) => <Container>{pokemon ? 'hello' : <NoPokemon />}</Container>;

Customizations.defaultProps = {
  pokemon: null,
};

Customizations.propTypes = {
  pokemon: pokemonPropTypes,
};

export default Customizations;
