import React from "react";
import {
  ButtonDiv,
  ButtonLabel,
  ButtonModal,
  StyledModal,
  TitleDiv,
} from "./styles";
import FocusLock from "react-focus-lock";
import { Status } from "../status";

export const Modal = ({ isOpen, toggleModal}) => {
  const name = "Okay";
  // function generatorStatus() {
  //   if (result <= 18.5) {
  //     setBackground("#ffddf8");
  //     setStatus("Abaixo do Peso");
      
  //   } else if(result > 18.5){
  //     setBackground("#6af271");
  //     setStatus("Saudável");
  //   }

  //   return(
  //     <Status
  //     children={result}
  //     background={background}
  //     status={status}
  //   />
  //   )
  // }
 
  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={toggleModal}
        role="dialog"
        aria-modal={true}
        aria-labelledby="modal-label"
      >
        <FocusLock>
          <TitleDiv>
            
              <Status
              />
            

            <ButtonDiv>
              <ButtonModal onClick={toggleModal}>
                <ButtonLabel>{name}</ButtonLabel>
              </ButtonModal>
            </ButtonDiv>
          </TitleDiv>
        </FocusLock>
      </StyledModal>
    </>
  );
};
