import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    height: '100vh',
    overflow: 'hidden',
  },
  panel: {
    height: 'calc(100vh - 72px)',
    'overflow-y': 'scroll',
  },
  title: {
    'background-color': '#333',
    'z-index': 2,
    padding: '0 1rem',
  },
  pokemonPanel: {
    padding: '1rem 1rem',
    'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5)',
  },
}));
