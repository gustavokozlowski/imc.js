import styled from "styled-components";

export const ContainerBox = styled.main`
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
  font-size: 1.3vw;
  color: #000000;
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
  height: 15%;
  width: 90%;
`