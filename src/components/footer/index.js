import { Text } from "../../pages/about/styles";
import { ContainerFooter, ContentFooter } from "./styles";

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContentFooter>
        <Text fontWeight="regular" fontSize="1rem">
          Desenvolvido por Gustavo Kozlowski &copy; 2022 EASY-IMC
        </Text>
      </ContentFooter>
    </ContainerFooter>
  );
};
