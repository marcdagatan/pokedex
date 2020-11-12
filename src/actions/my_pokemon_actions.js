import { SELECT_POKEMON, REMOVE_POKEMON, SET_FOCUSED_MY_POKEMON, SET_FOCUSED_MY_POKEMON_NICKNAME } from './types';

export const selectPokemon = (slot, pokemon) => dispatch =>
  dispatch({ type: SELECT_POKEMON, payload: { [slot]: pokemon } });

export const removePokemon = payload => dispatch => dispatch({ type: REMOVE_POKEMON, payload });

export const setFocusedMyPokemon = (payload = 0) => dispatch => dispatch({ type: SET_FOCUSED_MY_POKEMON, payload });

export const setFocusedMyPokemonNickname = payload => dispatch =>
  dispatch({ type: SET_FOCUSED_MY_POKEMON_NICKNAME, payload });
