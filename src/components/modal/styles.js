import Modal from "styled-react-modal";
import styled from "styled-components";


export const ButtonModal = styled.button`
  text-align: center;
  border-radius: 4px;
  background: #6a2a9f;
  display: flex;
  outline: none;
  border: none;
  margin: 1rem;
  color: #fff;
  width: 6vw;
  height: 5vh;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1px 0.5px 0.5px 0.1px black;
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 2rem;
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
  text-shadow: #000 0.2px 0.2px 0.1px;
`;
export const ButtonDiv = styled.div`
  margin: auto;
`;

export const StyledModal = Modal.styled`
  flex-direction: column;
  width: 35vw;
  height: fit-content;
  display: flex;
 
  background-color: #fff;
  color: #000;
  border-radius: 15px;

 transition: 2000ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `;
