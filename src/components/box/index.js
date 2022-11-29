import { ContainerBox, Title, ContainerForm, ButtonContainer } from "./styles";
import { InputValue } from "../inputvalue";
import { Button } from "../button";
import { Modal } from "../modal";
import React, { useState, useContext } from "react";
import ImcContext from "../../contexts/ImcContext";

export const Box = () => {
  const labelWeight = "Insira o seu peso";
  const labelHeight = "Insira a sua altura";
  const placeholderHeight = "exemplo: 1,78";
  const placeholderWeight = "exemplo: 60";
  const typeInput = "number";
  const [isOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const { setImc } = useContext(ImcContext);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }
  const handleClick = (e) => {
    e.preventDefault();
    let result = weight / (height * height);
    setImc(result.toFixed(2));
    setIsOpen(!isOpen);
    return <Modal isOpen={isOpen} toggleModal={toggleModal} />;
  };
  const handleClear = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
    setImc("");
  };
  return (
    <>
      <ContainerBox className="container-box">
        <ContainerForm className="form">
          <Title className="Form-title">Calcule o seu IMC</Title>
          <InputValue
            type={typeInput}
            label={labelHeight}
            placeholder={placeholderHeight}
            value={height}
            onChange={(e) => {
              setHeight(+e.target.value);
            }}
          />

          <InputValue
            type={typeInput}
            label={labelWeight}
            placeholder={placeholderWeight}
            value={weight}
            onChange={(e) => setWeight(+e.target.value)}
          />
          <ButtonContainer>
            <Button onClick={handleClick} name="Calcular"></Button>
            <Button onClick={handleClear} name="Limpar" />
          </ButtonContainer>
        </ContainerForm>
      </ContainerBox>
      {isOpen === true ? (
        <Modal isOpen={isOpen} toggleModal={toggleModal} />
      ) : null}
    </>
  );
};
