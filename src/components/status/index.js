import React, { useState, useContext, useEffect } from "react";
import { ContainerStatus, StatusBar, Text } from "./styles";
import ResultContext from "../../contexts/ResultContext";

export const Status = () => {
  const { result } = useContext(ResultContext);
  const [background, setBackground] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
   const generateStatus = () =>{
      if (result < 18.5) {
        setBackground("#ffddf8");
        setStatus("Abaixo do Peso");
      } else {
        setBackground("#6af271");
        setStatus("Saudável");
      }
    }
    generateStatus();
  }, [result]);
  return (
    <ContainerStatus>
      <Text textDecorationLine="underline">RESULTADO</Text>
      <Text>IMC:</Text>
      <Text>{result}</Text>
      <Text>STATUS:</Text>
      <StatusBar backgroundColor={background}>
        <Text>{status}</Text>
      </StatusBar>
    </ContainerStatus>
  );
};
