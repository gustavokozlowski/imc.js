import styled from "styled-components";

export const ContainerAbout = styled.main`
  background: #fff;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: #000;
`;

export const Main = styled.main`
  display: flex;
  background-color: #ddd3ff;
  flex-direction: column;
  margin: 5vw;
  border-radius: 6px;
`;
export const Section = styled.section`
  margin-left: 2vw;
  paddi
`;
export const ALink = styled.a`
  text-decoration: none;
  &:hover {
  color: #6a2a7f;
},
    &:active {
  color: #000;
}
`;
export const Title = styled.h1`
  font-size: clamp(2.5em, 1em + 1vw, 1.7em);
  margin: 1vw;
`;
export const Img = styled.img`
    width: 35vw;
    height: 25vh;
    border-radius: 6px;
`;

export const Text = styled.p`
  
  font-size: ${(props) => props.fontSize || "clamp(1.5em, 1em + 1vw, 1.7em );"};
  font-weight: ${(props) => props.fontWeight || "bolder"};
  text-decoration-line: ${(props) => props.textDecorationLine || "none"};
  margin: ${(props) => props.marginProps || "1vw"};
`;
