import { cloneElement, createContext, useContext, useState } from "react";
import { useFadeEffect } from "../hooks/useFadeEffect";
import { useOutsideClick } from "../hooks/useOutsideClick";

import { createPortal } from "react-dom";
import styled from "styled-components";

import { HiXMark } from "react-icons/hi2";

const StyledModal = styled.div`
  ${(props) =>
    props.$form
      ? `
          width: 80%;
          height: 80%;
          @media (max-width: 600px) {
            padding: 0px;
          }
        `
      : ""}
  ${(props) =>
    props.$popup
      ? `@media(max-width: 800px) {
    width: 60%;
  }
  @media(max-width: 600px) {
    width: 80%;
  }`
      : ""}
  overflow: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  // it's somehow not ideal but we can't add property to read only object (react element)
  // but we can use this built in method
  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name, form = false, popup = false }) {
  const { openName, close } = useContext(ModalContext);
  const { fadeRef, fadeOut } = useFadeEffect(openName, close, 1000);
  const ref = useOutsideClick(fadeOut);

  return name === openName
    ? createPortal(
        <Overlay ref={fadeRef}>
          <StyledModal ref={ref} $form={form} $popup={popup}>
            <Button onClick={fadeOut}>
              <HiXMark />
            </Button>
            <div>{cloneElement(children, { onCloseModal: fadeOut })}</div>
          </StyledModal>
        </Overlay>,
        document.body
      )
    : null;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
