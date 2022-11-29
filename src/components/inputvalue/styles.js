import styled from "styled-components";

export const Input = styled.input`
  font-size: 1vw;
  padding-left: 6px;
  margin-top: 4px;
  color: #000;
  border: 1px solid #000000;
  height: 4.5vh;
  width: 20vw;
  background-color: #fff;
  border-radius: 7px;
  ::-webkit-input-placeholder {
    color: black;
  }
`;
export const Label = styled.label`
  margin-bottom: -1.5px;
  font-size: 20px;
  color: #000;
  align-self: flex-start;
`;
export const ContainerInput = styled.main`
  height: 10vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
