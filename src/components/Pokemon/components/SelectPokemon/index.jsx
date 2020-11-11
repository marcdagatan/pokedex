import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';

import PokeHeader from '../../../PokeHeader';
import { pokemonPropTypes } from '../../../../propTypes';
import randomMessage from '../../../../utils/randomMessage';
import pokemonSlots from '../../../../static/pokemonSlots';

const SelectPokemon = ({ myPokemon, selectPokemon, pokemon }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openDialog = () => {
    setMessage(randomMessage());
    setOpen(true);
  };

  const selectAPokemon = number => {
    selectPokemon(number, pokemon);
    setOpen(false);
  };

  const renderMyPokemonSelectList = pokemonSlots.flatMap(number => {
    const existingPokemon = myPokemon[number];

    return (
      <ListItem key={number} button onClick={() => selectAPokemon(number)}>
        <ListItemAvatar>
          <Avatar>{existingPokemon ? <img src={existingPokemon.sprites.frontDefault} alt="sprite" /> : number}</Avatar>
        </ListItemAvatar>
        {existingPokemon ? existingPokemon.name : 'Open'}
      </ListItem>
    );
  });

  return (
    <>
      <Button variant="contained" color="primary" disableElevation onClick={openDialog}>
        CATCH THIS POKEMON!!!
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{message}</DialogTitle>
        <PokeHeader url={pokemon.sprites.frontDefault} />
        <p>Which slot do you want to put {pokemon.name}?</p>
        <p>Clicking on an existing pokemon will replace it from your lineup</p>
        <List>{renderMyPokemonSelectList}</List>
      </Dialog>
    </>
  );
};

SelectPokemon.propTypes = {
  selectPokemon: PropTypes.isRequired,
  pokemon: pokemonPropTypes.isRequired,
  myPokemon: pokemonPropTypes.isRequired,
};

export default SelectPokemon;
