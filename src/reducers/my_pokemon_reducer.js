import _ from 'lodash/fp';

import {
  SELECT_POKEMON,
  REMOVE_POKEMON,
  SET_FOCUSED_MY_POKEMON,
  SET_FOCUSED_MY_POKEMON_NICKNAME,
} from '../actions/types';

const DEFAULT_STATE = {
  myPokemon: {},
  focused: 0,
};

export default (state = DEFAULT_STATE, action) => {
  const updateMyPokemon = attrs => ({
    ...state.myPokemon,
    [state.focused]: { ...state.myPokemon[state.focused], ...attrs },
  });

  switch (action.type) {
    case SELECT_POKEMON:
      return { ...state, myPokemon: { ...state.myPokemon, ...action.payload } };
    case REMOVE_POKEMON:
      return { ...state, myPokemon: _.omit([action.payload], state.myPokemon) };
    case SET_FOCUSED_MY_POKEMON:
      return { ...state, focused: action.payload };
    case SET_FOCUSED_MY_POKEMON_NICKNAME:
      return {
        ...state,
        myPokemon: updateMyPokemon({ nickname: action.payload }),
      };
    default:
      return state;
  }
};
