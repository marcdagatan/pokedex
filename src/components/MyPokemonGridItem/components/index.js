import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: ${props => (props.isFocused ? '#555' : '#444')};
  overflow: hidden;
  transition: all 400ms;

  &:hover {
    cursor: pointer;
    opacity: 0.97;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const Name = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  text-transform: uppercase;
  font-weight: 700;
  background: #000;
  padding: 7px 12px;
  color: #fff;
`;

export const SlotNumber = styled.div`
  color: #555;
  opacity: 0.7;
  font-size: 10rem;
  font-weight: 700;
  position: absolute;
  left: -15px;
  bottom: -15px;
  line-height: 9rem;
`;