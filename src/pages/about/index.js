import React from "react";
import {
  ContainerAbout,
  Img,
  ALink,
  Main,
  Section,
  Text,
  Title,
} from "./styles";

export const About = () => {
  return (
    <ContainerAbout>
      <Main>
        <Section>
          <Title>O que é o imc?</Title>
          <Text>
            Criado no século 19 pelo matemático Lambert Quételet, o Índice de
            Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que
            permite medir se alguém está ou não com o peso ideal. Ele aponta se
            o peso está adequado ou se está abaixo ou acima do peso.
          </Text>
          <Text  >
            O IMC é uma fórmula utilizada por vários profissionais de saúde,
            incluindo médicos, enfermeiros e nutricionistas, para saber, de uma
            forma rápida, se a pessoa precisa ganhar ou perder peso.
          </Text>
        </Section>
        <Section>
          <Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOUH-avLbWPDsxyv_HNYAhpeRyF3_BYQzxEc8Qq0IpSEe_6VVCJ_focBdyL15L5tHi-Q&usqp=CAU"
            alt="legenda das classificações do imc."
          />
          <Text marginProps="0vw" fontSize="1rem">
            fonte:
            <ALink
              href="https://brainly.com.br/tarefa/27358316"
              target="_blank"
            >
             https://brainly.com.br/tarefa/27358316
            </ALink>
          </Text>
          <Text marginProps="2vw 0vw" fontSize="1.5rem">
          <ALink
              href="https://brainly.com.br/tarefa/27358316"
              target="_blank"
            >
              Clique aqui para ler outro artigo sobre IMC.
            </ALink>
          </Text>
        </Section>
      </Main>
    </ContainerAbout>
  );
};
