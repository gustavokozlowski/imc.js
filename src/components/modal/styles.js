import Modal from "styled-react-modal";
import styled from "styled-components";

export const ButtonModal = styled.button`
  text-align: center;
  text-transform: uppercase;
  box-sizing: border-box;
  border-radius: 6px;
  background: #b686c7;
  display: flex;
  border: 2px solid #000;
  color: #ffff;
  width: 6vw;
  height: 4vh;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #800080;
    box-shadow: 1px 1px 1px 1px #000;
  }
  ,
  &:active {
    background: #b686c7;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
export const ButtonLabel = styled.label`
  font-size: 1.1rem;
  display: flex;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  overflow-wrap: break-word;
  word-wrap: break-word;
  justify-content: center;
  align-items: center;
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
  background-color: #ddd3ff;
  color: #000;
  padding: 10px;
  border-radius: 8px;
  opacity: 0.95;
  transition-duration: all 10s ease-in-out`;
