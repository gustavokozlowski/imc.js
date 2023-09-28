import styled from "styled-components";

export const StatusBar = styled.div`
  background-color: ${(props) => props.backgroundColor || "#ddd"};
  height: 7vh;
  width: 12vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  color: #fff;
  border-radius: 6px;
`;
export const TextStatus = styled.p`
  color: #f8f9f5;
  font-size: 1.3rem;
  font-weight: bolder ;
  text-shadow: #000 0px 2px 1px,  #000 0px 2px 1px;
`;
export const HeaderModal = styled.header`
  display: flex;
  border-radius: 13px 13px 0 0;
  justify-content: center;
  background-color: #6a2a9f;
  width: 100%;
  color: #fff;
  border-bottom: 0.5px solid #000;
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
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-shadow: #000 0.2px 0.2px 0.1px;
`;
