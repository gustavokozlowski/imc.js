
import { ContainerBox, Title, ContainerForm } from "./styles";
import { InputValue } from "../inputvalue";
import { Button } from "../button";
import React, { useState } from "react";


export const Box = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [result, setResult] = useState(0);
  const labelWeight = "Insira o seu peso";
  const labelHeight = "Insira a sua altura";
  const placeholderHeight = "exemplo: 1.78";
  const placeholderWeight = "exemplo: 60";
  const typeInput = "number";
  
  const handleClick = (e) => {
    e.preventDefault();
    setResult(weight / (height * height));
    console.log(height)
    console.log(result)
    return result
    
  }
  const handleClear = (e) => {
    e.preventDefault();
    setWeight();
    setHeight();
    
  }
 
  return (
    <ContainerBox className="container-box">
      <ContainerForm className="form">
        <Title className="Form-title">Calcule o seu IMC</Title>
        <InputValue
          
          type={typeInput}
          label={labelHeight}
          placeholder={placeholderHeight}
          value={height}
          onChange={(e) => {setHeight(+e.target.value) }}
        />
        <InputValue
          type={typeInput}
          label={labelWeight}
          placeholder={placeholderWeight}
          value={weight}
          onChange={(e) => setWeight(+e.target.value)}

        />

        <Button onClick={handleClick}  name="Calcular" />
        <Button onClick={handleClear}  name="Limpar" />

      </ContainerForm>
      <p>Esse é o resultado: {result.toFixed(2)} </p>
     
    </ContainerBox>
  );
};
