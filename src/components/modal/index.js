import React from "react";
import { ButtonDiv, ButtonLabel, ButtonModal, StyledModal } from "./styles";
import FocusLock from "react-focus-lock";

export const Modal = ({ isOpen, toggleModal }) => {
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
          <p id="modal-label">I am an accessible modal!</p>
          <ButtonDiv>
          <ButtonModal onClick={toggleModal}>
            <ButtonLabel>{name}</ButtonLabel>
          </ButtonModal>
          </ButtonDiv>
        </FocusLock>
      </StyledModal>
    </>
  );
};
