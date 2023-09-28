import styled from "styled-components";

export const ContainerAbout = styled.main`
  background-image: linear-gradient(to right, #8555a7, #454185);
  display: flex;
  flex-direction: column;
  color: #fff;
  height: fit-content;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`;

export const Main = styled.main`
  gap: 4rem;
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
  width: 50vw;
  background-color: #6a2a9f;

  border-radius: 6px;
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    cursor: pointer;
    width: 50vw;
  }
`;
export const ALink = styled.a`
  text-decoration: none;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    color: #ddd;
  }
  &:active {
    color: #000;
  }
`;
export const Title = styled.h1`
  font-size: 2rem;
`;
export const SubTitle = styled.h1`
  font-size: 1rem;
  color: #fff;
`;
export const Img = styled.img`
  width: 35vw;
  height: 25vh;
  border-radius: 6px;
`;

export const Text = styled.p`
  font-weight: ${(props) => props.fontWeight || "bolder"};
  text-decoration-line: ${(props) => props.textDecorationLine || "none"};
  color: #fff;
`;
