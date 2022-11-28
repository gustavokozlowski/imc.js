import React from "react";
import { ButtonLabel } from "../modal/styles";
import { ContainerButton } from "./styles";

export const Button = ({ name, onClick }) => {
  return (
    <ContainerButton onClick={onClick}>
      <ButtonLabel>{name}</ButtonLabel>
    </ContainerButton>
  );
};
