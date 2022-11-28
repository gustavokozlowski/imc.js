import Modal from "styled-react-modal";
import styled from "styled-components";

export const ButtonModal = styled.button`
  text-transform: uppercase;
  border-radius: 6px;
  background: #b686c7;
  border: 2px solid #000;
  color: #ffff;
  width: 6vw;
  height: 3vh;
  padding: 0.25em 1em;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:active {
    background: #800080;
  }
`;

export const TitleDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center ;
text-align: center;
flex-direction: column;

`

export const ButtonLabel = styled.label`
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
`;
export const ButtonDiv = styled.div`
  margin: auto;
`;

export const StyledModal = Modal.styled`
  margin: 0;
  flex-direction: column;
  width: 35vw;
  height: 50vh;
  display: flex;
  border: 0.8px solid #000;
  background-color: #fee;
  color: #000;
  padding: 10px;
  border-radius: 8px;
  opacity: ${(props) => props.opacity};
  transition-duration: all 10s ease-in-out`;
