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
}));
