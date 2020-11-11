import { combineReducers } from 'redux';
import pokedex from './pokedex_reducer';
import myPokemon from './my_pokemon_reducer';

export default combineReducers({ pokedex, myPokemon });
