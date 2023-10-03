import styled from "styled-components";
import { device } from "../../utils/devices";

export const ContainerAbout = styled.main`
  display: flex;
  flex-direction: column;
  color: #fff;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Main = styled.main`
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;
  height: 100vh;
`;
export const Section = styled.section`
  padding: 1rem;
  outline: none;
  height: fit-content;
  width: 65vw;
  background-color: #6a2a9f;
  border-radius: 6px;
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    cursor: pointer;
  }
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
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
export const ALink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    color: #ddd;
  }
  &:active {
    color: #000;
  }
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.6rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.7rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 0.8rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 0.85rem;
  }
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 1rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 1.17rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 1.25rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 1.35rem;
  }
`;
export const SubTitle = styled.h1`
  font-size: 1rem;
  color: #fff;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.7rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.8rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 0.85rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  font-weight: ${(props) => props.fontWeight || "bolder"};
  text-decoration-line: ${(props) => props.textDecorationLine || "none"};
  color: #fff;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.6rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.7rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 0.8rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 0.85rem;
  }
`;
