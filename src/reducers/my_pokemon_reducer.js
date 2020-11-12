import _ from 'lodash/fp';

import { SELECT_POKEMON, REMOVE_POKEMON, SET_FOCUSED_MY_POKEMON } from '../actions/types';

const DEFAULT_STATE = {
  myPokemon: {},
  focused: { slotNumber: 0, pokemon: {} },
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SELECT_POKEMON:
      return { ...state, myPokemon: { ...state.myPokemon, ...action.payload } };
    case REMOVE_POKEMON:
      return { ...state, myPokemon: _.omit([action.payload], state.myPokemon) };
    case SET_FOCUSED_MY_POKEMON:
      return { ...state, focused: action.payload };
    default:
      return state;
  }
};
