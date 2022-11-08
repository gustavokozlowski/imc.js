import Modal from "styled-react-modal";
import styled from "styled-components";

export const ContainerButton = styled.button`
  border-radius: 10px;
  background: #b686c7;
  border: 2px solid #000;
  color: #ffff;
  padding: 0.25em 1em;
  cursor: pointer;
  &:active{
    

  }
`;

export const ButtonLabel = styled.label`
font-size: 15px;

`

export const StyledModal = Modal.styled`
  width: 25rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: palevioletred;
  color: #000;
  border-radius: 8px;
  opacity: ${(props) => props.opacity};
  transition-duration: 10s`;

  
