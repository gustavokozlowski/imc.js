import React from "react";
import { motion } from "framer-motion";
import {
  ButtonDiv,
  ButtonLabel,
  ButtonModal,
  ContainerModal,
  StyledModal,
} from "./styles";
import FocusLock from "react-focus-lock";
import { Status } from "../status";

//criar forma para o modal fazer uma transição mais suave

export const Modal = ({ isOpen, toggleModal }) => {
  const name = "okay";
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
            <ContainerModal>
              <Status />
              <ButtonDiv>
                <ButtonModal onClick={toggleModal}>
                {name}
                </ButtonModal>
              </ButtonDiv>
            </ContainerModal>
          </FocusLock>
      </StyledModal>
        </motion.div>
    </>
  );
};
