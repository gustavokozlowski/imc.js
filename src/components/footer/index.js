import { Text } from "../../pages/about/styles";
import {
    ContainerFooter,
  } from "./styles";
  
  export const Footer = () => {
    return (
      <ContainerFooter>
       <Text fontWeight="regular" fontSize="1rem" >Desenvolvido por Gustavo Kozlowski
        </Text>
       <Text fontWeight="regular" fontSize="1rem" > &copy; 2021 EASY-IMC
        </Text>
      </ContainerFooter>
    );
  };