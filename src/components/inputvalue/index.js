import React from "react";
import { Input, Label, ContainerInput } from "./styles";

export const InputValue = ({
  label,
  placeholder,
  onChange,
  value,
  type,
  children
}) => {
  return (
    <ContainerInput className="input">
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
