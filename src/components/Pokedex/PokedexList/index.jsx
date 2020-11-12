import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import _ from 'lodash/fp';

import PokedexListItem from '../PokedexListItem';
import { pokemonPropTypes } from '../../../propTypes';

const map = _.map.convert({ cap: false });

const PokedexList = ({ pokemon: pokemonList, fetchAPokemon, fetchPokemon }) => (
  <List component="nav">
    {map(
      (pokemon, number) => (
        <PokedexListItem
          pokemon={pokemon}
          key={number}
          number={number}
          triggerFetch={parseInt(number, 10) === _.size(pokemonList) - 20}
          fetchAPokemon={fetchAPokemon}
          fetchPokemon={fetchPokemon}
        />
      ),
      pokemonList,
    )}
  </List>
);

PokedexList.propTypes = {
  pokemon: pokemonPropTypes.isRequired,
  fetchAPokemon: PropTypes.func.isRequired,
  fetchPokemon: PropTypes.func.isRequired,
};

export default PokedexList;
