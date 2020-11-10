import { SET_POKEMON, FETCHING_POKEMON, SET_FOCUSED_POKEMON, FETCHING_A_POKEMON } from './types';
import axios from '../config/axios';

export const fetchPokemon = (limit = 100, offset = 0) => async dispatch => {
  dispatch({ type: FETCHING_POKEMON, payload: true });

  try {
    let {
      data: { results: payload },
      status,
    } = await axios.get(`/pokemon?limit=${limit}&offset=${offset}`);

    if (status === 200) dispatch({ type: SET_POKEMON, payload });

    dispatch({ type: FETCHING_POKEMON, payload: false });
  } catch (error) {
    Promise.reject(error);

    dispatch({ type: FETCHING_POKEMON, payload: false });
  }
};

export const fetchAPokemon = id => async dispatch => {
  dispatch({ type: FETCHING_A_POKEMON, payload: true });

  try {
    let { data: payload, status } = await axios.get(`/pokemon/${id}`);

    if (status === 200) dispatch({ type: SET_FOCUSED_POKEMON, payload });

    dispatch({ type: FETCHING_A_POKEMON, payload: false });
  } catch (error) {
    Promise.reject(error);

    dispatch({ type: FETCHING_A_POKEMON, payload: false });
  }
};

export const clearFocusedPokemon = () => dispatch => dispatch({ type: SET_FOCUSED_POKEMON, payload: {} });
