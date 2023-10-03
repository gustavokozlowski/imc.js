import React, { useState, useContext, useEffect } from "react";
import { ContainerStatus, HeaderModal, StatusBar, Text, Title, TextStatus} from "./styles";
import ImcContext from "../../contexts/ImcContext";

export const Status = () => {
  const { imc } = useContext(ImcContext);
  const [background, setBackground] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
   const generateStatus = (imc) =>{
      if (imc < 18.5) {
        setBackground("#FDDA0D");
        setStatus("Abaixo do Peso");
      } else if(imc >= 18.5 && imc < 24.9) {
        setBackground("#1ed360");
        setStatus("Saudável");
      } else if(imc >= 24.9 && imc < 29.9) {
        setBackground("#F5A200");
        setStatus("Acima do Peso");
      }
       else if(imc >= 29.9) {
        setBackground("#F54C41");
        setStatus("Obesidade");
      } else {
        setBackground("#ddd");
        setStatus("Indefinido");
      }
    }
    generateStatus(imc);
  }, [imc]);
  return (
    <ContainerStatus>
      <HeaderModal>
      <Title>RESULTADO</Title>
      </HeaderModal>
      <Text>IMC</Text>
      <Text>{imc}</Text>
      <Text>STATUS</Text>
      <StatusBar backgroundColor={background}>
        <TextStatus>{status}</TextStatus>
      </StatusBar>
    </ContainerStatus>
  );
};
