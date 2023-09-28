import React from "react";
import {
  ContainerAbout,
  SubTitle,
  ALink,
  Main,
  Section,
  Text,
  Title,
} from "./styles";

export const About = () => {
  return (
    <>
      <ContainerAbout id="about">
        <Main>
          <Title> Perguntas Frequentes</Title>
          <Section>
            <SubTitle>Sobre este projeto</SubTitle>
            <Text fontWeight="regular">
              Este projeto foi criado exclusivamente com um único intuito:
              servir como ponte entre saúde e a tecnologia.
            </Text>
          </Section>
          <Section>
            <SubTitle>Você sabia?</SubTitle>
            <Text fontWeight="regular">
              O IMC é uma fórmula utilizada por vários profissionais de saúde,
              incluindo médicos, enfermeiros e nutricionistas, para saber, de
              uma forma rápida, se a pessoa precisa ganhar ou perder peso.
            </Text>
          </Section>
          <Section>
            <SubTitle>O que é o imc?</SubTitle>
            <Text fontWeight="regular">
              Criado no século 19 pelo matemático Lambert Quételet, o Índice de
              Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que
              permite medir se alguém está ou não com o peso ideal. Ele aponta
              se o peso está adequado, abaixo ou acima do peso.
            </Text>
          </Section>
          <Section>
            <SubTitle>Como calcular o seu IMC?</SubTitle>
            <Text fontWeight="regular">
              Para a sua posição na tabela do Índice de Massa Corporal, você
              precisa de dois valores: seu peso e altura. É só dividir o peso
              (em quilos) pelo quadrado da altura (em metros), que é obtido pela
              multiplicação da altura por ela mesma. Então, a fórmula fica
              assim: IMC = Peso / Altura².
            </Text>
          </Section>
          <Section>
            <SubTitle>Saiba mais</SubTitle>
            <Text fontWeight="regular">
              <ALink
                href="https://brainly.com.br/tarefa/27358316"
                target="_blank"
              >
                Tabela de classificação do IMC
              </ALink>
            </Text>
            <Text fontWeight="regular">
              <ALink
                href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal"
                target="_blank"
              >
                Tudo sobre o IMC.
              </ALink>
            </Text>
          </Section>
        </Main>
      </ContainerAbout>
    </>
  );
};
