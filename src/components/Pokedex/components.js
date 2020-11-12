import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const GridContainer = styled(Grid)`
  height: 100vh;
  overflow: hidden;
  background: #222;
  color: #fff;
`;

export const TitlePanel = styled(Grid)`
  background-color: #333;
  z-index: 2;
  padding: 0 1rem;
`;

export const PokedexListPanel = styled(Grid)`
  height: calc(100vh - 72px);
  overflow-y: scroll;
`;

export const PokemonPanel = styled(Grid)`
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
