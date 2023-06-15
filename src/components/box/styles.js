import styled from "styled-components";

export const ContainerBox = styled.main`
  z-index: 1000;
  font-family: Helvetica;
  background-color: #fff;
  padding: 0;
  margin: 0;
  height: 45vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0.7;
  border-radius: 15px;
  box-shadow: 5px 4px 8px 6px rgba(0, 0, 0, 0.9), 5px 6px 30px 5px rgba(0, 0, 0, 0.9);

`;

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 1.7rem;
  color: #000;
  text-shadow: 2px 2px #ddd;
`
export const ContainerForm = styled.form`
 width: 100%;
 height: 100%;
 display: flex ;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 margin-bottom: 20px;
`
export const ErrorMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom:5px;
  color: #f33;
  font-family: 'Roboto',; 
`
export const ButtonContainer = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  height: 5vh;
  width: 90vw;
`
export const Input = styled.input`
  font-size: 1vw;
  padding-left: 6px;
  margin-top: 4px;
  color: #000;
  border: 1px solid #000000;
  height: 5.5vh;
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
  text-shadow: 2px 2px #ddd;
  font-weight: bold;
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

export const Button = styled.button`
  margin: 2vh;
  text-transform: uppercase;
  border-radius: 4px;
  width: 7vw;
  font-weight: 700;
  height: 4vh;
  background: #800080;
  border: 1px solid black;
  color: #000;
  margin-top: 5vh;
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px black;
  align-self: center;
  &:active {
    background: #b686c7;
    box-shadow: none;
  };
  &:hover {
    background: #800080;
  }
`;
