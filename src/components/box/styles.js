import styled from "styled-components";
import { motion } from "framer-motion";
import { PiWarningCircleBold } from "react-icons/pi";
import { BsCalculator } from "react-icons/bs";
import { device } from "../../utils/devices";

export const ContainerBox = styled(motion.main)`
  color: #fff;
  box-sizing: border-box;
  height: fit-content;
  width: max-content;
  background-color: #6a2a9f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: all 1s;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    width: 80vw;
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

export const CalculatorIcon = styled(BsCalculator)`
  font-size: 10rem;
  color: #ddf;
  opacity: 0.8;

  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 10rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 10rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 10rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 10rem;
  }
`;
export const ErrorIcon = styled(PiWarningCircleBold)`
  padding-left: 1rem;
  font-size: 1rem;
  color: #ddf;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    padding-left: 0.5rem;
    font-size: 0.5rem;
  }
`;

export const ContainerForm = styled.form`
  /* background-color: aliceblue; */
  gap: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 0.5rem;
  border-left: 6px dotted rgba(0, 0, 0, 0.2);
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    /* background-color: black */
    width: 100%;
    height: 100%;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    width: 100%;
    height: 100%;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    width: 100%;
    height: 100%;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    width: 100%;
    height: 100%;
  }
`;
export const ErrorMessage = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: rgb(255, 182, 193);
  text-shadow: #000 0.2px 0.2px 0.5px;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.5rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.6rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 0.9rem;
  }
`;
export const ErrorContainer = styled(motion.div)`
  background-color: rgb(255, 51, 51);
  align-items: center;
  text-align: center;
  justify-content: start;
  gap: 1rem;
  display: flex;
  height: 4vh;
  border-radius: 7px;
  width: 25vw;
  transition: all ease-in 0.3s;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    width: 100%;
    height: 4vh;
    gap: 0.5rem;
  }

  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    width: 100%;
    height: 4vh;
    gap: 0.5rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    width: 100%;
    height: 4vh;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    width: 90%;
    height: 4vh;
  }
`;
export const ButtonContainer = styled.div`
  /* background-color: orange; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  display: flex;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    flex-direction: row;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    flex-direction: row;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    flex-direction: row;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    flex-direction: column;
  }
`;
export const Input = styled.input`
  font-size: 1.1rem;
  color: #211b15;
  padding: 0.5rem;
  border: none;
  background-color: #fff;
  border-radius: 7px;
  outline: none;
  ::-webkit-input-placeholder {
  }
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    /* width: 60vw; */
    font-size: 0.7rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.8rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 0.9rem;
  }
`;
export const Label = styled.label`
  font-size: 1.2rem;
  line-height: -1rem;
  align-self: flex-start;
  text-shadow: #000 0.2px 0.2px 0.1px;
  font-weight: 500;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.75rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.9rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 0.95rem;
  }
`;
export const ContainerInput = styled.main`
  height: fit-content;
  width: 25vw;
  display: flex;
  flex-direction: column;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    width: 100%;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    width: 100%;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    width: 100%;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    width: 90%;
  }
`;

export const Button = styled.button`
  /* text-transform: uppercase; */
  font-size: 1.1rem;
  display: flex;
  color: #fff;
  font-weight: bold;
  overflow-wrap: break-word;
  word-wrap: break-word;
  justify-content: center;
  align-items: center;
  text-shadow: #000 0.2px 0.2px 0.1px;
  border-radius: 7px;
  width: 25vw;
  padding: 0.5rem;
  font-weight: 400;
  height: 4vh;
  background: #6a2a9f;
  border: 1px solid black;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 0.1px 0.5px 0.5px 0.1px black;
  align-self: center;
  &:active {
    box-shadow: none;
  }
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.7rem;
    width: 20vw;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.8rem;
    width: 15vw;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 0.9rem;
    width: 15vw;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 1rem;
    width: 90%;
  }
`;
