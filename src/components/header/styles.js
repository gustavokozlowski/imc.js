import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: #b686c7;
  height: 8vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #000;
  align-items: center;
  justify-content: space-around;
`;

export const AppTitle = styled.h1`
  color:  #fff ;
  font-size: 26px;
  font-weight: bolder;
  font-style: normal;
  text-shadow: #000 0.1em 0.1em 0.2em;
  margin-right: 500px;
  
`;
export const NavbarContainer = styled.nav`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  text-shadow: #000 0.1em 0.1em 0.2em;
  color: #fff;
  font-size: 20px;
  margin: 10px;
  &:hover,
  &:focus {
    color: #fff7;
  }
  &:active {
    color: #fff7;
  }
  
`;
