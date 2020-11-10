import { FETCH_POKEMON } from './types';
import axios from '../config/axios';

export const fetchPokemon = (limit = 100, offset = 0) => async dispatch => {
  try {
    let {
      data: { results: payload },
      status,
    } = await axios.get(`/pokemon?limit=${limit}&offset=${offset}`);

    if (status === 200) dispatch({ type: FETCH_POKEMON, payload });
  } catch (error) {
    // when you have time, add a notification snackbar
    Promise.reject(error);
  }
};

export const placeholder = () => {};
