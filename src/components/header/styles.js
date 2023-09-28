import { HashLink } from 'react-router-hash-link';
import styled from "styled-components";

export const ContainerHeader = styled.header`
  z-index: 1000;
  background-color: #6a2a9f;
  height: 8vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  position: fixed;
`;

export const AppTitle = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  text-shadow: #6a2a9f 2px 2px 2px; 
  font-weight: bolder;
`;
export const NavbarContainer = styled.nav`
  display: flex;
`;
export const NavbarLink = styled(HashLink)`
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  transition: all 0.300s;
  margin: 1rem;
  &:hover,
  &:focus {
    color: #fff7;
  }
  &:active {
    color: #fff7;
  }
`;
