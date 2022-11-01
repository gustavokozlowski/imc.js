import * as yup from "yup";
import { ContainerBox, Title, ContainerForm, ErrorMessage } from "./styles";
import { InputValue } from "../inputvalue";
import { Button } from "../button";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const Box = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const labelWeight = "Insira o seu peso";
  const labelHeight = "Insira a sua altura";
  const placeholderHeight = "exemplo: 1.78";
  const placeholderWeight = "exemplo: 60";
  const typeInput = "number";
  let schemaValidation = yup.object({
    height: yup
      .number()
      .required("Por favor, insira à sua altura")
      .positive("A altura deve ser maior que 0")
      .max(3, "A altura não pode ter mais de 3 caracteres"),
    weight: yup
      .number()
      .required("Por favor, insira o seu peso")
      .positive("O peso deve ser maior que 0"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  return (
    <ContainerBox className="container-box">
      <ContainerForm className="form" onSubmit={handleSubmit()}>
        <Title className="Form-title">Calcule o seu IMC</Title>
        <InputValue
          name="height"
          type={typeInput}
          label={labelHeight}
          placeholder={placeholderHeight}
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
          {...register("height")}
        />
        {errors.height && <ErrorMessage>{errors.height?.message}</ErrorMessage>}
        <InputValue
          name="weight"
          type={typeInput}
          label={labelWeight}
          placeholder={placeholderWeight}
          value={weight}
          onChange={(e) => setWeight(+e.target.value)}
          {...register("weight")}
        />
        {errors.weight && <ErrorMessage>{errors.weight?.message}</ErrorMessage>}

        <Button name="Calcular" />
      </ContainerForm>
    </ContainerBox>
  );
};
