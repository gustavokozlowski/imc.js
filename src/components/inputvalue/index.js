import React from "react";
import { Input, Label, ContainerInput } from "./styles";

export const InputValue = ({
  label,
  placeholder,
  onChange,
  value,
  type,

}) => {
  
  return (
    <ContainerInput >
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </ContainerInput>
  );
};
