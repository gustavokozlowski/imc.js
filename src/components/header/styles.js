import { HashLink } from "react-router-hash-link";
import { device } from "../../utils/devices";
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
  font-size: 1.2rem;
  text-shadow: #6a2a9f 2px 2px 2px;
  font-weight: bolder;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.8rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.9rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 1rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 1rem;
  }
`;
export const NavbarContainer = styled.nav`
  display: flex;
`;
export const NavbarLink = styled(HashLink)`
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  transition: all 0.3s;
  margin: 1rem;
  &:hover,
  &:focus {
    color: #fff7;
  }
  &:active {
    color: #fff7;
  }
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.7rem;
    margin: 0.4rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.75rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 0.85rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 0.95rem;
  }
  @media ${device.minWidth.laptopL} and ${device.maxWidth.desktop} {
    font-size: 1.15rem;
  }
`;
