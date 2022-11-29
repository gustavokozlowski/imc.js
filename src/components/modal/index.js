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
