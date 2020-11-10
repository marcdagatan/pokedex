import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { POKEAPI_URL } from '../globals';

export default applyCaseMiddleware(axios.create({ baseURL: POKEAPI_URL }));
