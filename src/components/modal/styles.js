import Modal from "styled-react-modal";
import styled from "styled-components";

export const ButtonModal = styled.button`
  border-radius: 6px;
  background: #b686c7;
  border: 2px solid #000;
  color: #ffff;
  padding: 0.25em 1em;
  margin-top: 2px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  &:active{

  }
`;

export const ButtonLabel = styled.label`
font-size: 15px;
color: #fff;
cursor: pointer;
font-weight: bold;
`
export const ButtonDiv = styled.div`
margin: 2vh 0 0 7vh;

`

export const StyledModal = Modal.styled`
  width: 25rem;
  height: 15rem;
  display: flex;
  border: 0.8px solid #000;
  background-color: palevioletred;
  justify-content: center;
  align-items: center;
  color: #000;
  border-radius: 8px;
  opacity: ${(props) => props.opacity};
  transition-duration: all 10s ease-in-out`;


  
