import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';
import _ from 'lodash/fp';

import { pokemonPropTypes } from '../../../propTypes';

const PokedexListItem = ({ pokemon, fetchAPokemon, number, fetchPokemon, triggerFetch }) => (
  <VisibilitySensor onChange={isVisible => isVisible && triggerFetch && fetchPokemon()}>
    <ListItem button onClick={() => fetchAPokemon(number)}>
      {`${number} ${_.startCase(pokemon.name)}`}
    </ListItem>
  </VisibilitySensor>
);

PokedexListItem.propTypes = {
  pokemon: pokemonPropTypes.isRequired,
  fetchAPokemon: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  fetchPokemon: PropTypes.func.isRequired,
  triggerFetch: PropTypes.bool.isRequired,
};

export default PokedexListItem;
