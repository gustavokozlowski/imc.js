import styled from "styled-components";

export const ContainerButton = styled.button`
  text-transform: uppercase;
  border-radius: 4px;
  text-align: center;
  font-size: 15px;
  background: #BF40BF;
  border: 1px solid #000;
  color: #ffff;
  margin: 2vh ;
  padding: 0.25em 1em;
  cursor: pointer;
  &:hover {
    background: #800080;
  },
  &:active{
    background: #b686c7;
  }
`;
