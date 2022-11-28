import styled from "styled-components";

export const StatusBar = styled.div`
  background-color:  ${(props) => props.backgroundColor || "#ddd"};
  height: 5vh;
  width: 8vw;
  border: 2px solid #000;
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
`;
export const ContainerStatus = styled.main`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 60px;
  width: 30vw;
  height: 35vh;
`;
export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "clamp(1.5em, 1em + 1vw, 1.7em );" };
  font-weight: ${(props) => props.fontWeight || "bolder"};
  text-decoration-line: ${(props) => props.textDecorationLine || "none"};
  margin: 1.7vh;

`;
