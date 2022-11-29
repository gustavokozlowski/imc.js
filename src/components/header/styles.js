import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color:#8c5cac;
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
  font-size: 1.5rem;
  text-shadow: #000 0.1em 0.1em 0.2em;
  font-weight: bolder;
  
`;
export const NavbarContainer = styled.nav`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  text-shadow: #000 0.1em 0.1em 0.2em;
  color: #fff;
  font-size:1.3rem;
  margin: 10px;
  &:hover,
  &:focus {
    color: #fff7;
  }
  &:active {
    color: #fff7;
  }
  
`;
