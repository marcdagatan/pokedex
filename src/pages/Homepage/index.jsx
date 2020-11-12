import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import Pokedex from '../../containers/PokedexContainer';
import MyPokemonGrid from '../../containers/MyPokemonGridContainer';
import Customizations from '../../containers/CustomizationsContainer';
import styles from './styles';
import Panel from './Panel';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Homepage = () => {
  const classes = styles();

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6} lg={7}>
          <Panel title="My Pokemon">
            <MyPokemonGrid />
          </Panel>
          <Panel title="Customizations">
            <Customizations />
          </Panel>
        </Grid>
        <Grid item xs={12} md={6} lg={5} className={classes.pokedex}>
          <Pokedex />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
