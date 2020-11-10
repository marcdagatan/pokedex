import _ from 'lodash/fp';

import { FETCH_POKEMON, FETCHING_POKEMON, FETCH_A_POKEMON, FETCHING_A_POKEMON } from '../actions/types';

const mapKeys = _.mapKeys.convert({ cap: false });

const DEFAULT_STATE = {
  pokemon: {},
  fetchingPokemon: false,
  focusedPokemon: {},
  fetchingAPokemon: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          ...mapKeys((pokemon, index) => _.size(state.pokemon) + parseInt(index, 10) + 1, action.payload),
        },
      };
    case FETCHING_POKEMON:
      return { ...state, fetchingPokemon: action.payload };
    case FETCH_A_POKEMON:
      return { ...state, focusedPokemon: action.payload };
    case FETCHING_A_POKEMON:
      return { ...state, fetchingAPokemon: action.payload };
    default:
      return state;
  }
};
