import styled from "styled-components";
import { motion } from "framer-motion";
import { PiWarningCircleBold } from "react-icons/pi";
import { BsCalculator } from "react-icons/bs";

export const ContainerBox = styled(motion.main)`
  color: #fff;
  box-sizing: border-box;
  height: fit-content;
  width: max-content;
  background-color:  #6a2a9f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: all 1s;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:target {
    transition: height 200px;
  }
`;

export const CalculatorIcon = styled(BsCalculator)`
  font-size: 10rem;
  color: #ddf;
  opacity: 0.8;
`;
// Parei nessa parte estamos procurando uma estilização para o error;
export const ErrorIcon = styled(PiWarningCircleBold)`
  padding-left: 1rem;
  font-size: 1rem;
  color: #ddf;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #ddf;
  text-shadow: #000 2px 2px 2px;
  opacity: 0.8;
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
  border-left: 6px dotted rgba(0, 0, 0, 0.2);
`;
export const ErrorMessage = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: rgb(255, 182, 193);

  text-shadow: #000 0.2px 0.2px 0.5px;
`;
export const ErrorContainer = styled(motion.div)`
  background-color: rgb(255, 51, 51);
  align-items: center;
  text-align: center;
  gap: 1rem;
  display: flex;
  height: 4vh;
  border-radius: 7px;
  width: 25vw;
  transition: all ease-in 0.3s;
`;
export const ButtonContainer = styled.div`
  /* background-color: orange; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  display: flex;
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
`;
export const Label = styled.label`
  font-size: 1.4rem;
  line-height: -1rem;
  align-self: flex-start;
  text-shadow: #000 0.2px 0.2px 0.1px;
  font-weight: 500;
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
  opacity: 0.8;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 0.1px 0.5px 0.5px 0.1px black;
  align-self: center;
  &:active {
    box-shadow: none;
  }
`;
