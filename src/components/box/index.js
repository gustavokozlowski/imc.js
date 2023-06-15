import {
  ContainerBox,
  Title,
  ContainerForm,
  ButtonContainer,
  ErrorMessage,
  Input,
  Label,
  ContainerInput,
  Button,
} from "./styles";
import { Modal } from "../modal";
import React, { useState, useContext } from "react";
import ImcContext from "../../contexts/ImcContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonLabel } from "../modal/styles";

import * as yup from "yup";

const schemaImc = yup.object().shape({
  height: yup
    .number("A altura tem que ser um número válido")
    .min(2, "Deve conter no minimo 2 digitos")
    .moreThan(0.2, `Este campo não pode ser menor que: 0`)
    .positive("A altura deve ser um número positivo")
    .required("Campo obrigatório"),
  weight: yup
    .number()
    .required("O campo Senha é obrigatório")
    .min(1, "A senha deve ter no min 4 caracteres"),
});

export const Box = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setImc } = useContext(ImcContext);

  const {
    register,
    handleSubmit: onSubmit, watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaImc),
  });
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const handle = (data) => {
    // if (weight > 0 && height > 0) {
    //   const result = weight / (height * height);
    //   setImc(result.toFixed(2));
    //   setIsOpen(!isOpen);
    //   return <Modal isOpen={isOpen} toggleModal={toggleModal} />;
    // }else if( weight <=0 && height <= 0 ){
    //   setWeight("");
    //   setHeight("");
    // }
    return console.log(data);
  };

  const handleClear = (weight, height) => {

    console.log(height)
    setImc("");
  };

  return (
    <>
      <ContainerBox className="container-box">
        <ContainerForm onSubmit={onSubmit(handle)} className="form">
          <Title className="form-title">calcule o seu imc</Title>
          <ContainerInput>
            <Label htmlFor="height">Insira a sua altura</Label>
            <Input
              type="number"
              placeholder="1.80"
              name="height"
              {...register("height")}
            />
          </ContainerInput>
          <ErrorMessage>{errors.height?.message}</ErrorMessage>
          <ContainerInput>
            <Label htmlFor="weight">Insira o seu peso</Label>
            <Input
              type="number"
              placeholder="80"
              name="weight"
              {...register("weight")}
            />
          </ContainerInput>
          <ErrorMessage>{errors.weight?.message}</ErrorMessage>
          <ButtonContainer>
            <Button type="submit">
              <ButtonLabel>calcular</ButtonLabel>
            </Button>
            <Button onClick={handleClear}>
              <ButtonLabel>limpar</ButtonLabel>
            </Button>
            {/* <Button onClick={handleClear} name="Limpar" /> */}
          </ButtonContainer>
        </ContainerForm>
      </ContainerBox>
      {isOpen === true ? (
        <Modal isOpen={isOpen} toggleModal={toggleModal} />
      ) : null}
    </>
  );
};
