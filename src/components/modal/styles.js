import Modal from "styled-react-modal";
import styled from "styled-components";
import { device } from "../../utils/devices";

export const ButtonModal = styled.button`
  font-size: 1.1rem;
  display: flex;
  color: #fff;
  overflow-wrap: break-word;
  word-wrap: break-word;
  justify-content: center;
  align-items: center;
  text-shadow: #000 0.2px 0.2px 0.1px;
  border-radius: 7px;
  width: 7vw;
  padding: 0.5rem;
  font-weight: 400;
  height: 4vh;
  background-color: #6a2a9f;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 0.1px 0.5px 0.5px 0.1px black;
  align-self: center;
  &:active {
    box-shadow: none;
  }
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    width: 25vw;
    font-size: 0.7rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    width: 20vw;
    font-size: 0.85rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    width: 15vw;
    font-size: 0.9rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    width: 10vw;
    font-size: 1rem;
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: column;

  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileM} {
    
  }
  @media ${device.minWidth.mobileM} and ${device.maxWidth.mobileL} {

  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {

  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 1rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 1.1rem;
  }
`;

export const ButtonLabel = styled.label`
  font-size: 1.1rem;
  display: flex;
  color: #fff;
  cursor: pointer;
  overflow-wrap: break-word;
  word-wrap: break-word;
  justify-content: center;
  align-items: center;
  text-shadow: #000 0.2px 0.2px 0.1px;
`;
export const ButtonDiv = styled.div`
  padding: 1rem;
`;

export const StyledModal = Modal.styled`
  flex-direction: column;
  width: 35vw;
  display: flex;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  transition: 700ms ease-in-out;
  border: none;
  outline: none;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileM} {
    width: 70vw;
  }
  @media ${device.minWidth.mobileM} and ${device.maxWidth.mobileL} {
    width: 70vw;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    width: 70vw;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    width: 70vw;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    width: 70vw;
  
  }
  `;
