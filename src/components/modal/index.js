import React from "react";
import { motion } from "framer-motion";
import {
  ButtonDiv,
  ButtonLabel,
  ButtonModal,
  StyledModal,
  TitleDiv,
} from "./styles";
import FocusLock from "react-focus-lock";
import { Status } from "../status";

//criar forma para o modal fazer uma transição mais suave

export const Modal = ({ isOpen, toggleModal }) => {
  const name = "Okay";
  return (
    <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          exit={{ opacity: 0 }}
        >
      <StyledModal

        isOpen={isOpen}
        onEscapeKeydown={toggleModal}
        role="dialog"
        aria-modal={true}
        aria-labelledby="modal-label"
      >
          <FocusLock>
            <TitleDiv>
              <Status />
              <ButtonDiv>
                <ButtonModal onClick={toggleModal}>
                  <ButtonLabel>{name}</ButtonLabel>
                </ButtonModal>
              </ButtonDiv>
            </TitleDiv>
          </FocusLock>
      </StyledModal>
        </motion.div>
    </>
  );
};
