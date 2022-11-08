import React from "react";
import { StyledModal } from "./styles";
import FocusLock from "react-focus-lock";
import { Button } from "../button";

export const Modal = ({ isOpen, toggleModal }) => {
  const name = 'Okay'
  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={toggleModal}
        role="dialog"
        aria-modal={true}
        aria-labelledby= "modal-label"
      >
         <FocusLock>
          <p id="modal-label">I am an accessible modal!</p>
          <Button onClick={toggleModal} name={name}></Button>
        </FocusLock>
    </StyledModal>
    </>
  );
};
