import styled from 'styled-components';

export { default as Name } from './Name';
export { default as NoPokemon } from './NoPokemon';

export const Container = styled.div`
  background: #444;
  height: calc(100% - 51px - 2rem);
  color: #fff;
  position: relative;
  padding: 1rem;
  overflow-y: scroll;
`;
