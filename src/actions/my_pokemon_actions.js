import { SELECT_POKEMON, REMOVE_POKEMON } from './types';

export const selectPokemon = (slot, pokemon) => dispatch =>
  dispatch({ type: SELECT_POKEMON, payload: { [slot]: pokemon } });

export const removePokemon = payload => dispatch => dispatch({ type: REMOVE_POKEMON, payload });
