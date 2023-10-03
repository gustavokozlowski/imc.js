import styled from "styled-components";
import { device } from "../../utils/devices";

export const StatusBar = styled.div`
  background-color: ${(props) => props.backgroundColor || "#ddd"};
  height: 7vh;
  width: 12vw;
  text-align: center;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  padding: 0.2rem;
  color: #fff;
  border-radius: 6px;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    width: 40vw;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    width: 25vw;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    width: 20vw;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    width: 15vw;
  }
`;
export const TextStatus = styled.p`
  color: #f8f9f5;
  font-size: 1.3rem;
  font-weight: bolder ;
  text-shadow: #000 0px 2px 1px,  #000 0px 2px 1px;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.85rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.9rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 1rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 1.1rem;
  }
`;
export const HeaderModal = styled.header`
  display: flex;
  border-radius: 13px 13px 0 0;
  justify-content: center;
  align-items: center;
  background-color: #6a2a9f;
  width: 100%;
  height: 6vh;
  color: #fff;
 
`;
export const ContainerStatus = styled.main`
  height: auto;
  border-radius: 13px 13px 0 0;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: #ddd 0.2px 0.2px 0.2px;
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
    font-size: 1.1rem;
  }
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-shadow: #000 0.2px 0.2px 0.1px;
  @media ${device.minWidth.mobileS} and ${device.maxWidth.mobileL} {
    font-size: 0.95rem;
  }
  @media ${device.minWidth.mobileL} and ${device.maxWidth.tablet} {
    font-size: 0.9rem;
  }
  @media ${device.minWidth.tablet} and ${device.maxWidth.laptop} {
    font-size: 1rem;
  }
  @media ${device.minWidth.laptop} and ${device.maxWidth.laptopL} {
    font-size: 1.1rem;
  }
`;
