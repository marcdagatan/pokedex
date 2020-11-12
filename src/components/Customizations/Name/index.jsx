import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Create, Check } from '@material-ui/icons';
import { IconButton, TextField } from '@material-ui/core';

const H1 = styled.h1`
  margin: 0;
`;

const Edit = styled(IconButton)`
  color: #ddd;

  &:hover {
    color: #f0f0f0;
  }
`;

const Name = ({ name, nickname, setNickname }) => {
  const [editing, setEditing] = useState(false);
  const [nicknameState, setNicknameState] = useState(nickname);

  useEffect(() => {
    setNicknameState(nickname);
  }, [nickname]);

  return (
    <>
      <H1>
        {editing ? (
          <TextField label="Nickname" value={nicknameState} onChange={e => setNicknameState(e.target.value)} />
        ) : (
          nickname || name
        )}
        <Edit onClick={() => (editing ? setNickname(nicknameState) && setEditing(false) : setEditing(val => !val))}>
          {editing ? <Check /> : <Create />}
        </Edit>
      </H1>
      <p>{name}</p>
    </>
  );
};

Name.defaultProps = {
  nickname: null,
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
  setNickname: PropTypes.func.isRequired,
  nickname: PropTypes.string,
};

export default Name;
