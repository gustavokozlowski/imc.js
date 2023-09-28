import {
  ContainerBox,
  ContainerForm,
  ButtonContainer,
  ErrorMessage,
  Input,
  Label,
  ContainerInput,
  Button,
  ErrorContainer,
  CalculatorIcon,
  ErrorIcon,
} from "./styles";
import { Modal } from "../modal";
import React, { useState, useContext } from "react";
import ImcContext from "../../contexts/ImcContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schemaImc = yup.object().shape({
  height: yup
    .number()
    .positive("Deve ser um número positivo")
    .typeError("Por favor, insira um número válido")
    .required("campo obrigatório!"),
  weight: yup
    .number()
    .typeError("Por favor, insira um número válido")
    .required("campo obrigatório!"),
});

export const Box = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setImc } = useContext(ImcContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaImc),
    mode: "onTouched",
  });
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const handleResult = (data) => {
    if (data.height !== null && data.weight !== null) {
      const height = watch("height") / 100;
      const weight = watch("weight");
      const result = weight / (height * height);
      setImc(result.toFixed(2));
      console.log(data);

      return setIsOpen(true);
    }
    console.log("ACESSO:", isOpen === true ? "Negado" : "okay baby");
  };
  console.log(errors);
  return (
    <>
      <ContainerBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0 }}
        className="container-box"
      >
        <CalculatorIcon />
        {/* <Title className="form-title">calcule seu imc</Title> */}
        <ContainerForm onSubmit={handleSubmit(handleResult)}>
          <ContainerInput>
            <Label htmlFor="height">Insira a sua altura</Label>
            <Input
              id="height"
              type="number"
              placeholder="180"
              {...register("height", { require: true })}
            />
          </ContainerInput>
          {errors.height ? (
            <ErrorContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <ErrorIcon />
              <ErrorMessage>{errors?.height?.message}</ErrorMessage>
            </ErrorContainer>
          ) : null}
          <ContainerInput>
            <Label htmlFor="weight">Insira o seu peso</Label>
            <Input
              id="weight"
              type="number"
              placeholder="80"
              {...register("weight")}
            />
          </ContainerInput>
          {errors.weight ? (
            <ErrorContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <ErrorIcon />
              <ErrorMessage>{errors?.weight?.message}</ErrorMessage>
            </ErrorContainer>
          ) : null}
          <ButtonContainer>
            <Button type="submit">calcular</Button>

            <Button id="limpar" onClick={() => reset()}>
              limpar
            </Button>
          </ButtonContainer>
        </ContainerForm>
      </ContainerBox>
      {isOpen === true ? (
        <Modal isOpen={isOpen} toggleModal={toggleModal} />
      ) : null}
    </>
  );
};
