import React, { useState, useContext, useEffect } from "react";
import { ContainerStatus, StatusBar, Text } from "./styles";
import ImcContext from "../../contexts/ImcContext";

export const Status = () => {
  const { imc } = useContext(ImcContext);
  const [background, setBackground] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
   const generateStatus = () =>{
      if (imc < 18.5) {
        setBackground("#F5EF42");
        setStatus("Abaixo do Peso");
      } else if(imc >= 18.5 && imc < 24.9) {
        setBackground("#6af271");
        setStatus("Saudável");
      } else if(imc >= 24.9 && imc < 29.9) {
        setBackground("#F5A200");
        setStatus("Acima do Peso");
      }
       else if(imc >= 29.9) {
        setBackground("#F54C41");
        setStatus("Obesidade");
      } else {
        setBackground("#fff");
        setStatus("Indefinido");
      }
    }
    generateStatus();
  }, [imc]);
  return (
    <ContainerStatus>
      <Text textDecorationLine="underline">RESULTADO</Text>
      <Text>IMC:</Text>
      <Text fontSize="1.9rem">{imc}</Text>
      <Text>STATUS:</Text>
      <StatusBar backgroundColor={background}>
        <Text fontSize="1.5rem">{status}</Text>
      </StatusBar>
    </ContainerStatus>
  );
};
