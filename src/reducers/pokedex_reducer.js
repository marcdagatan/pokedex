import _ from 'lodash/fp';

import { FETCH_POKEMON } from '../actions/types';

const mapKeys = _.mapKeys.convert({ cap: false });

const DEFAULT_STATE = {
  pokemon: {},
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          ...mapKeys((pokemon, index) => parseInt(index, 10) + 1, action.payload),
        },
      };
    default:
      return state;
  }
};
