import React from 'react';
import { Grid } from '@material-ui/core';

import Pokedex from '../../containers/PokedexContainer';
import MyPokemonGrid from '../../containers/MyPokemonGridContainer';
import Customizations from '../../containers/CustomizationsContainer';
import Panel from './Panel';
import { HomepageContainer, GridContainer } from './components';

const Homepage = () => {
  return (
    <HomepageContainer>
      <GridContainer container>
        <Grid item xs={12} md={6} lg={7}>
          <Panel title="My Pokemon">
            <MyPokemonGrid />
          </Panel>
          <Panel title="Customizations">
            <Customizations />
          </Panel>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Pokedex />
        </Grid>
      </GridContainer>
    </HomepageContainer>
  );
};

export default Homepage;
