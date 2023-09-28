import React from "react";
import {
  ContainerHeader,
  AppTitle,
  NavbarContainer,
  NavbarLink,
} from "./styles";

export const Header = () => {
  return (
    <ContainerHeader>
      <AppTitle>EASY-IMC.</AppTitle>
      <NavbarContainer>
        <NavbarLink smooth to="/#imc">calcular</NavbarLink>
        <NavbarLink smooth to="/#about">sobre</NavbarLink>
      </NavbarContainer>
    </ContainerHeader>
  );
};
