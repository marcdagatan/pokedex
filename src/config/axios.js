import axios from 'axios';
import { POKEAPI_URL } from '../globals';

export default axios.create({ baseURL: POKEAPI_URL });
